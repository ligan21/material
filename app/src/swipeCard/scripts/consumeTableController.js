angular.module('swipeCard',['ngMaterial'])
 .controller('consumeTableController', ['$mdDialog', '$consume', '$scope', function ($mdDialog, $consume, $scope) {
  'use strict';
   $scope.$on('input-card-id-child',function(event,id){
      
      $scope.query.id = id;
      getConsumes();
    });
 
  var bookmark;

  $scope.selected = [];
  
  $scope.filter = {
    options: {
      debounce: 500
    }
  };

  $scope.query = {
    id:'',
    filter: '',
    limit: '5',
    order: 'nameToLower',
    page: 1

  };
  
  function getConsumes(query) {

    $scope.promise = $consume.consumes.get(query || $scope.query, success).$promise;
  }
  
  function success(consumes) {
    $scope.consumes = consumes;
  }

  $scope.addItem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addCardController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: '/app/src/cards/templates/add-card-dialog.html',
    }).then(getCards);
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
    }).then(getDesserts);
  };
  
  $scope.onPaginate = function (page, limit) {
    getConsumes(angular.extend({}, $scope.query, {page: page, limit: limit}));
  };
  
  $scope.onReorder = function (order) {
    getConsumes(angular.extend({}, $scope.query, {order: order}));
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };
  
}]);
