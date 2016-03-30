angular
  .module('secondaryClassMarchants')
  .controller('secondaryClassMarchantDetailMessageController',['$mdDialog','$scope','$http','$detailMessage',function($mdDialog,$scope,$http,$detailMessage) {
    var url = '/app/src/secondaryClassMarchants/scripts/secondaryClassMarchantDetailMessage.json';
    $http.get(url).success(function(response){
       $scope.secondaryClassMarchant= response;
    });

   $scope.modifyItem = function (event) {
    $detailMessage.set($scope.secondaryClassMarchant);
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'modifySecondaryClassMarchantController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: '/app/src/secondaryClassMarchants/templates/modify-secondary-class-marchant-dialog.html',
    }).then(getSecondaryClassMarchant);
  };

  function getSecondaryClassMarchant($http){
    var url = '/app/src/secondaryClassMarchants/scripts/secondaryClassMarchantDetailMessage.json';
    $http.get(url).success(function(response){
       $scope.secondaryClassMarchant= response;
    });
  }

  }])

//  .config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
//    $mdThemingProvider.theme('docs-dark', 'default')
//      .primaryPalette('yellow')
//      .dark();
//  });
