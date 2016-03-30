angular
  .module('common')
  .controller('PresentCtrl', function($scope,$http) {
    //$scope.present="";
    function loadAll($http) {
        var url = '/app/src/common/scripts/present.json';
         $http.get(url).success(function(response){
             $scope.presents = response;
        });
        
    }
    loadAll($http);
  });
 // .config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
  //  $mdThemingProvider.theme('docs-dark', 'default')
  //    .primaryPalette('yellow')
  //    .dark();
  //});
