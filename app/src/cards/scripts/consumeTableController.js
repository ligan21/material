angular.module('cards',['ngMaterial'])
 .controller('consumeTableController', ['$mdDialog', '$consume', '$scope', function ($mdDialog, $consume, $scope) {
  'use strict';
  
  var bookmark;
  var id = getUrlParam("id");
  function getUrlParam(name){
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return unescape(r[2]);
        return null;
  }
  $scope.selected = [];
  
  $scope.filter = {
    options: {
      debounce: 500
    }
  };

  $scope.query = {
    id:id,
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
    
    getConsumes();
  });
}]);
