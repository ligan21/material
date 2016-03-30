angular.module('secondaryClassMarchants').factory('$card', ['$resource', function ($resource) {
  'use strict';

  return {
    cards: $resource('/app/src/secondaryClassMarchants/scripts/cardsTable.json')
    //desserts:$resource('./desserts.js')
  };
}]);
