angular.module('cards').factory('$cancelCard', ['$resource', function ($resource) {
  'use strict';

  return {
    cards: $resource('/app/src/cards/scripts/cancelCardsTable.json')
    //desserts:$resource('./desserts.js')
  };
}]);
