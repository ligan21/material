(function(){

  angular
       .module('leftMenus')
       .config(function($mdIconProvider) {
         $mdIconProvider
         .iconSet("call", 'assets/svg/communication-icons.svg', 24)
         .iconSet("social", 'assets/svg/social-icons.svg', 24);
        })
       .controller('LeftMenuController', [
          'leftMenuService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          LeftMenuController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LeftMenuController( leftMenuService, $mdSidenav, $mdBottomSheet, $log) {
    var self = this;
    self.ower="幸福村农资一级商";
    self.user="张山";
    self.notice="通知：优惠大酬宾刷卡75折"
    self.selected     = null;
    self.menus        = [ ];
    self.selectMenu   = selectMenu;
    self.toggleList   = toggleMenusList;
    self.makeContact  = makeContact;

    // Load all registered users

    leftMenuService
          .loadAllMenus()
          .then( function( menus ) {
            self.menus    = [].concat(menus);
            self.selected = menus[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleMenusList() {
      $mdSidenav('left').toggle();
    }
    
    this.mouseEnter = function (menu){
      // if(menu === $scope.menu[0])
        //openMenu($mdOpenMenu,null);
       //$mdOpenMenu();
       //if(index == 0 )
    }
    this.openMenu = function($mdOpenMenu, ev) {
     
      //originatorEv = ev;
      $mdOpenMenu(ev);
    };
    /**
     * Select the current avatars
     * @param menuId
     */
    function selectMenu ( menu ) {
      self.selected = angular.isNumber(menu) ? $scope.menus[menu] : menu;
      window.location.href = self.selected.goto;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedMenu) {

        $mdBottomSheet.show({
          controllerAs  : "cp",
          templateUrl   : './src/menus/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.menu = selectedMenu;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
