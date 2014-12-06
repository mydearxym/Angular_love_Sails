angular.module( 'monitorCloud.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
    $scope.currentUser = config.currentUser;

    var navItems = [
        {title: ' 实时聊天', translationKey: 'navigation:messages', url: '/messages', cssClass: 'fa fa-comments'},
        {title: ' 协议编辑', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-clipboard'},
        {title: ' 用户管理', translationKey: 'navigation:users', url:'/users',cssClass: 'fa fa-user'}
    ];

    if (!$scope.currentUser) {
        navItems.push({title: 'Register', translationKey: 'navigation:register', url: '/register', cssClass: 'register'});
        navItems.push({title: 'Login', translationKey: 'navigation:login', url: '/login', cssClass: 'login'});
    }

    $scope.navItems = navItems;
});