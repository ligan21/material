angular
  .module('swipeCard')
  .controller('cardDetailMessageController', function($scope,$http,$mdDialog) {
    $scope.$on('input-card-id-child',function(event,id){
      getCardMessage(id);
    });
    function getCardMessage(id){
       var url = '/app/src/cards/scripts/cardDetailMessage.json?id='+id;
       $http.get(url).success(function(response){
         $scope.card= response;
       });
    }
    $scope.modifyCardMessage = function(ev){
        var confirm = $mdDialog.prompt()
           .title("修改信息")
           .textContent("新手机号")
           .placeholder("新手机号")
           .ariaLabel("新手机号")
           .targetEvent(ev)
           .ok("确定")
           .cancel("取消");

         $mdDialog.show(confirm).then(function(result){
           $scope.card.phoneNum=result;
           upModifyCardMessage();
           },function(){
           });
    };
    $scope.renewCard = function(ev){
        var confirm = $mdDialog.prompt()
           .title("补卡")
           .textContent("新卡号")
           .placeholder("新卡号")
           .ariaLabel("新卡号")
           .targetEvent(ev)
           .ok("确定")
           .cancel("取消");

         $mdDialog.show(confirm).then(function(result){
           $scope.card.phoneNum=result;
           upModifyCardMessage();
           },function(){
           });
    };
    $scope.cancelCard = function(ev){
        var confirm = $mdDialog.confirm()
           .title("退卡")
           .textContent("退卡申请，需要人工审核，是否确认退卡")
           .ariaLabel("退卡")
           .targetEvent(ev)
           .ok("确定")
           .cancel("取消");
         $mdDialog.show(confirm).then(function(){
           
           upModifyCardMessage();
           },function(){
           });
    };
    function upModifyCardMessage(){
       $http({
       method  : "POST",
       url     : "addcad",
       data    :  $scope.card,
       headers : {'Content-Type':'application/x-www-form-urlencoded'}
       })
        .success(function(data) {
          if(data.errors){
          }
          else{
          } 
        });
    }
  })
