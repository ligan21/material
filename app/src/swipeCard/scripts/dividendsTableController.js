angular
.module('swipeCard')
.controller('dividendsTableController', ['$mdDialog', '$dividends', '$scope', function ($mdDialog, $dividends, $scope) {
  'use strict';
  $scope.$on('input-card-id-child',function(event,id){
      $scope.query.id = id;
      getDividendss();
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
  
  function getDividendss(query) {

    $scope.promise = $dividends.dividendss.get(query || $scope.query, success).$promise;
  }
  
  function success(dividendss) {
    $scope.dividendss = dividendss;
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
    getDividendss(angular.extend({}, $scope.query, {page: page, limit: limit}));
  };
  
  $scope.onReorder = function (order) {
    getDividendss(angular.extend({}, $scope.query, {order: order}));
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };
  

}]);
