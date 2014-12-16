angular.module( 'monitorCloud.login', [
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtroller as LoginCtrl',
        templateUrl: 'login/index.tpl.html'
      },
      'navbar': {
        controller: "HeaderCtrl",
        templateUrl: 'header/index.tpl.html'
      }
    }
  })
    .state('reset', {
      url: '/reset',
      views: {
        "main": {
          controller: "LoginCtroller as LoginCtrl",
          templateUrl: 'login/reset.tpl.html'
        },

        'navbar': {
          controller: "HeaderCtrl",
          templateUrl: 'header/index.tpl.html'
        }
      }
    });
})

  .controller( 'LoginCtroller', function AboutController($scope, titleService,$state, AuthService, localStorageService) {
//    var self = this;
    var self = $scope;
    titleService.setTitle('Login');

    self.errors = [];

    self.login = function(userinfo){
      self.errors = [];
      console.log("login userinfo: ", userinfo);
      AuthService.login(userinfo).success(function(response){
        $state.go('home');
      }).error(function(err){
        console.log("err: " + err.err);
        self.errors.push(err.err);
      });
    }

  });