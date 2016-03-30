(function () {
  'use strict';
  angular
      .module('common')
      .controller('secondaryClassMarchantCtrl', Ctrl);
  function Ctrl ($scope,$timeout, $q, $log, $http) {
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // list of `state` value/display objects
    //self.marchants        = loadAll($http);
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;
    loadAll($scope,$http);
    //self.newState = newState;
    function newState(state) {
      alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.manchants.filter( createFilterFor(query) ) : self.marchants,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }
    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }
    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll($scope,$http) {
  //    var allManchants = '东升镇, 东升镇, 东升镇, 东升镇';
  //    return allManchants.split(/, +/g).map( function (marchant) {
  //      return {
  //        value: marchant.toLowerCase(),
  //        display: marchant
  //      };
  //    });
        
        var url = '/app/src/common/scripts/secondaryClassMarchant.json';
         $http.get(url).success(function(response){
             self.marchants = response;
        });
        
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(marchant) {
        return (marchant.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }
})();
