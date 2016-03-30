angular.module('secondaryClassMarchants').controller('modifySecondaryClassMarchantController', ['$mdDialog', '$scope','$detailMessage', function ($mdDialog,$scope,$detailMessage) {
  'use strict';
   $scope.secondaryClassMarchant = $detailMessage.get();
  this.cancel = $mdDialog.cancel;
  
  function success(card) {
    $mdDialog.hide(card);
  }
  
  this.modifyItem = function () {
    //alert($scope.card.id);
    //$scope.item.form.$setSubmitted();
    //if($scope.item.form.$valid) {
    //  $card.cards.save({card: $scope.card}, success);
    //}
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
      $mdDialog.hide(card); 
  };
  
}]);     
