angular.module('swipeCard').controller('swipeCardController', ['$scope', function ($scope) {
  'use strict';
  $scope.$on('input-card-id-parent',function(event,id){
     $scope.$broadcast('input-card-id-child',id);
  });

}]);     
