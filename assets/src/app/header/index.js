angular.module( 'sailng.header', [
])

.controller( 'HeaderCtrl', function HeaderController( $scope, $state, config ) {
    $scope.currentUser = config.currentUser;

    var navItems = [
        {title: ' Messages', translationKey: 'navigation:messages', url: '/messages', cssClass: 'fa fa-comments'},
        {title: ' About', translationKey: 'navigation:about', url:'/about',cssClass: 'fa fa-clipboard'}
    ];

    if (!$scope.currentUser) {
        navItems.push({title: 'Register', translationKey: 'navigation:register', url: '/register', cssClass: 'register'});
        navItems.push({title: 'Login', translationKey: 'navigation:login', url: '/login', cssClass: 'login'});
    }

    $scope.navItems = navItems;
});