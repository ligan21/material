angular.module('cards').controller('cardsTableController', ['$mdDialog', '$card', '$scope','$cardType', function ($mdDialog, $card, $scope,$cardType) {
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
    order: 'id',
    page: 1
  };
  getCardTypes();

  function getCardTypes(){
     $scope.promise = $cardType.cardTypes.get('', cardTypeSuccess).$promise;
  }
  function getCards(query) {

    $scope.promise = $card.cards.get(query || $scope.query, success).$promise;
  }
  function cardTypeSuccess(cardTypes){
    $scope.cardTypes=cardTypes.cardTypes;
  }
  function success(cards) {
    $scope.cards = cards;
  }
  
  $scope.addCard = function (event) {
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
    getCards(angular.extend({}, $scope.query, {page: page, limit: limit}));
  };
  
  $scope.onReorder = function (order) {
    getCardts(angular.extend({}, $scope.query, {order: order}));
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };
  
  $scope.$watch('query.filter', function (newValue, oldValue) {
    //alert(newValue);
    if(!oldValue) {
      bookmark = $scope.query.page;
    }
    
    if(newValue !== oldValue) {
      $scope.query.page = 1;
    }
    
    if(!newValue) {
      $scope.query.page = bookmark;
    }
    getCards();

  });

  
}]);
