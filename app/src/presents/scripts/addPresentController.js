angular.module('presents').controller('addPresentController', ['$mdDialog', '$scope','$http', function ($mdDialog, $scope,$http) {
  'use strict';
  this.cancel = $mdDialog.cancel;
  
  function success(card) {
    $mdDialog.hide(card);
  }
  
  this.addItem = function () {
    $http({
       method  : "POST",
       url     : "present",
       data    :  $scope.present,
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
