angular.module('swipeCard').factory('$consume', ['$resource', function ($resource) {
  'use strict';

  return {
    consumes: $resource('/app/src/cards/scripts/consumeTable.json')
    //desserts:$resource('./desserts.js')
  };
}]);
