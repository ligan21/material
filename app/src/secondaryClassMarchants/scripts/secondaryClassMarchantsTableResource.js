angular.module('secondaryClassMarchants').factory('$secondaryClassMarchant', ['$resource', function ($resource) {
  'use strict';

  return {
    secondaryClassMarchants: $resource('/app/src/secondaryClassMarchants/scripts/secondaryClassMarchantsTable.json')
    //desserts:$resource('./desserts.js')
  };
}]);
