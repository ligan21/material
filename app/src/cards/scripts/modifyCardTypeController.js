angular.module('cards').controller('modifyCardTypeController', ['$scope','$http', function ($scope,$http) {
  'use strict';
   var id = getUrlParam("id");
   var url = '/app/src/cards/scripts/cardType.json?id='+id;
   $http.get(url).success(function(response){
       $scope.cardType= response;
   });

   $scope.modifyItem = function () {
    alert($scope.cardType);
    $http({
       method  : "POST",
       url     : "addcad",
       data    :  $scope.cardType,
       headers : {'Content-Type':'application/x-www-form-urlencoded'}
       })
        .success(function(data) {
          if(data.errors){
          }
          else{
          } 
        }); 
  };
    function getUrlParam(name){
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return unescape(r[2]);
        return null;
    }
}]);     
