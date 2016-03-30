angular.module('secondaryClassMarchants').controller('secondaryClassMarchantsTableController', ['$mdDialog', '$secondaryClassMarchant', '$scope', function ($mdDialog, $secondaryClassMarchant, $scope) {
  'use strict';
  
  var bookmark;
  
  $scope.selected = [];
  
  $scope.filter = {
    options: {
      debounce: 500
    }
  };

  $scope.query = {
    filter: '',
    limit: '5',
    order: 'nameToLower',
    page: 1
  };
  
  function getSecondaryClassMarchants(query) {

    $scope.promise = $secondaryClassMarchant.secondaryClassMarchants.get(query || $scope.query, success).$promise;
  }
  
  function success(secondaryClassMarchants) {
    $scope.secondaryClassMarchants = secondaryClassMarchants;
  }
  
  $scope.addItem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addSecondaryClassMarchantController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: '/app/src/secondaryClassMarchants/templates/add-secondary-class-marchant-dialog.html',
    }).then(getSecondaryClassMarchants);
  };


  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { desserts: $scope.selected },
      templateUrl: '../templates/delete-dialog.html',
    }).then(getSecondaryClassMarchants);
  };
  
  $scope.onPaginate = function (page, limit) {
    getSecondaryClassMarchants(angular.extend({}, $scope.query, {page: page, limit: limit}));
  };
  
  $scope.onReorder = function (order) {
    getSecondaryClassMarchants(angular.extend({}, $scope.query, {order: order}));
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };
  
  $scope.$watch('query.filter', function (newValue, oldValue) {
    if(!oldValue) {
      bookmark = $scope.query.page;
    }
    
    if(newValue !== oldValue) {
      $scope.query.page = 1;
    }
    
    if(!newValue) {
      $scope.query.page = bookmark;
    }
    
    getSecondaryClassMarchants();
  });
}]);
