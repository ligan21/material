angular.module('secondaryClassMarchants').controller('addSecondaryClassMarchantController', ['$mdDialog', '$scope','$http', function ($mdDialog,$scope,$http) {
  'use strict';
  
  this.cancel = $mdDialog.cancel;
  
  
  this.addItem = function () {

    $http({
       method  : "POST",
       url     : "addcad",
       data    :  $scope.secondaryClassMarchant,
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
