(function(){
  'use strict';

  angular.module('leftMenus')
         .service('leftMenuService', ['$q', LeftMenuService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function LeftMenuService($q){
    var menus = [
      {
        name: '会员卡',
        avatar: 'svg-1',
        goto: '/app/indexCardTable.html'
      },
      {
        name: '二级商',
        avatar: 'svg-2',
        goto : '/app/indexSecondaryClassMarchantTable.html'
      },
      {
        name: '报表',
        avatar: 'svg-3',
        goto: '/app/indexReport.html'
      },
      {
        name: '入卡',
        avatar: 'svg-4',
        goto:'/app/indexInputCard.html'
      }
  
    ];

    // Promise-based API
    return {
      loadAllMenus : function() {
        // Simulate async nature of real remote calls
        return $q.when(menus);
      }
    };
  }

})();
