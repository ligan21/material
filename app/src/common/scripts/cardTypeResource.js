angular.module('common').factory('$cardType', ['$resource', function ($resource) {
  'use strict';

  return {
    cardTypes: $resource('/app/src/common/scripts/cardType.json')
  };
}]);
