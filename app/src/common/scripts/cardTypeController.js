angular
  .module('common')
  .controller('CardTypeCtrl',function($scope,$http) {
    $scope.type="";
    function loadAll($http) {
        var url = '/app/src/common/scripts/cardType.json';
        $http.get(url).success(function(response){
             $scope.types = response;
        });
        
    }
    loadAll($http);
  });
  //.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
  //  $mdThemingProvider.theme('docs-dark', 'default')
  //    .primaryPalette('yellow')
  //    .dark();
  //});
