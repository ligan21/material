angular.module('swipeCard').controller('swipeCardMessageController', ['$scope','$http', function ($scope,$http) {
  'use strict';
   $scope.card={
    id :""
   }
   $scope.swipeCard = function () {
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
   };
   function getCardMessage(id){
       var url = '/app/src/swipeCard/scripts/cardDetailMessage.json?id='+id;
       $http.get(url).success(function(response){
         $scope.card= response;
       });
    }
   $scope.inputCardId = function(){
      //alert($scope.card.id);
      getCardMessage($scope.card.id);
      $scope.$emit('input-card-id-parent',$scope.card.id);
   }
}]);     
