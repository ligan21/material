angular.module('cards').factory('$cardTypes', ['$resource', function ($resource) {
  'use strict';

  return {
    cardTypes: $resource('/app/src/cards/scripts/cardTypesTable.json')
    //desserts:$resource('./desserts.js')
  };
}]);
