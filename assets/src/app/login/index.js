angular.module( 'monitorCloud.login', [
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtroller as LoginCtrl',
        templateUrl: 'login/index.tpl.html'
      }
    }
  });
})

  .controller( 'LoginCtroller', function AboutController( $scope, titleService ) {

    titleService.setTitle('Login');

  });