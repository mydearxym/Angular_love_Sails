angular.module( 'monitorCloud.header', [
])

.controller("HeaderCtrl", function($scope,$state,AuthService){
  $scope.currentUser = AuthService.getCurrentUser();

  var navItems = [
    {title: ' 实时聊天', translationKey: 'navigation:messages', url: '/messages', cssClass: 'fa fa-comments'},
    {title: ' 协议编辑', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-clipboard'},
    {title: ' 用户管理', translationKey: 'navigation:users', url:'/users',cssClass: 'fa fa-user'}
  ];

//  if (!$scope.currentUser) {
//    navItems.push({title: 'Login', translationKey: 'navigation:login', url: '/login', cssClass: 'login'});
//    navItems.push({title: 'Register', translationKey: 'navigation:register', url: '/register', cssClass: 'register'});
//  }

  $scope.navItems = navItems;

  $scope.logout = function(){
    console.log("HeaderCtrl logout");
    AuthService.logout();
    $state.go('login');
  }

});