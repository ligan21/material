angular
  .module('cards')
  .controller('cardDetailMessageController', function($scope,$http) {
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

  })
//  .config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
//    $mdThemingProvider.theme('docs-dark', 'default')
//      .primaryPalette('yellow')
//      .dark();
//  });
