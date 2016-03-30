angular
  .module('cards')
  .controller('approveCancelCardDetailMessageController', function($scope,$http) {
    var id = getUrlParam("id");
    var url = '/app/src/cards/scripts/cardDetailMessage.json?id='+id;
    $http.get(url).success(function(response){
       $scope.card= response;
    });

    function getUrlParam(name){
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return unescape(r[2]);
        return null;
    }
    $scope.accept = function (){
      $scope.card.approve="accept";
      
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
    }
    $scope.refuse = function (){
     $scope.card.approve="refuse";
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
    }

  })

