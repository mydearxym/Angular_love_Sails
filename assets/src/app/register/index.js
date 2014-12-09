angular.module( 'monitorCloud.register', [
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'register', {
    url: '/register',
    views: {
      "main": {
        controller: 'RegisterCtroller as RegisterCtrl',
        templateUrl: 'register/index.tpl.html'
      }
    }
  });
})

  .controller( 'RegisterCtroller', function AboutController( $scope, titleService ) {

    titleService.setTitle('register');

  });