angular.module('cards').controller('modifyCardDetailMessageController', ['$scope','$http', function ($scope,$http) {
  'use strict';
   var id = getUrlParam("id");
   var url = '/app/src/cards/scripts/cardDetailMessage.json?id='+id;
   $http.get(url).success(function(response){
       $scope.card= response;
   });
   $scope.modifyItem = function () {
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
      //$mdDialog.hide(card);  
  };
    function getUrlParam(name){
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return unescape(r[2]);
        return null;
    }
}]);     
