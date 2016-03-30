angular.module('nutritionApp').factory('$nutrition', ['$resource', function ($resource) {
  'use strict';

  return {
    desserts: $resource('/app/src/tables/scripts/desserts.js')
    //desserts:$resource('./desserts.js')
  };
}]);
