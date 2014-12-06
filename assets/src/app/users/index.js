angular.module( 'monitorCloud.users', [
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'users', {
    url: '/users',
    views: {
      "main": {
        controller: 'UsersCtrl',
        templateUrl: 'users/index.tpl.html'
      }
    }
  });
})

.controller( 'UsersCtrl', function AboutController( $scope, titleService ) {
  titleService.setTitle('users');
});