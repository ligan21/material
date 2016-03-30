angular.module('swipeCard').factory('$dividends', ['$resource', function ($resource) {
  'use strict';

  return {
    dividendss: $resource('/app/src/cards/scripts/dividendssTable.json')
    //desserts:$resource('./desserts.js')
  };
}]);
