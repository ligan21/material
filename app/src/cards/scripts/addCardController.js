angular.module('cards').controller('addCardController', ['$mdDialog',  '$scope','$cardType','$http', function ($mdDialog, $scope,$cardType,$http) {
  'use strict';
  
  this.cancel = $mdDialog.cancel;
  getCardTypes();
  function success(card) {
    $mdDialog.hide(card);
  }
  function getCardTypes(){
     $scope.promise = $cardType.cardTypes.get('', cardTypeSuccess).$promise;
  }
  function cardTypeSuccess(cardTypes){
    $scope.cardTypes=cardTypes.cardTypes;
  }
  this.addItem = function () {
    $http({
       method  : "POST",
       url     : "addcad",
       data    :  $scope.card,
       headers : {'Content-Type':'application/x-www-form-urlencoded'}
       })
        .success(function(data) {
          if(data.errors){
          }
          else{
          } 
        });
      $mdDialog.hide();  
  };
  
}]);     
