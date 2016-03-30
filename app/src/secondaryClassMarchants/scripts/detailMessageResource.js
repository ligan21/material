angular.module('secondaryClassMarchants').factory('$detailMessage',  function () {
  'use strict';
  var detailMessage={};
  //return {
  //  secondaryClassMarchant: $resource('/app/src/secondaryClassMarchants/scripts/cardsTable.json')
    //desserts:$resource('./desserts.js')
  //};
   function set(message){
     detailMessage = message;
   }  
   function get(){
     return detailMessage;
   }
   
   return {
      set : set,
      get : get
   }
});
