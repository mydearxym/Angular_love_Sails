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
  })
    .state('reset', {
      url: '/reset',
      views: {
        "main": {
          controller: "LoginCtroller as LoginCtrl",
          templateUrl: 'login/reset.tpl.html'

        }
      }
    });
})

  .controller( 'LoginCtroller', function AboutController($scope, titleService,$state, AuthService, localStorageService) {
//    var self = this;
    var self = $scope;

    titleService.setTitle('Login');
//    localStorageService.set("simon", "26 years old");

    self.login = function(userinfo){
//     todo: rename to getjwtToken/getToken

      console.log("login userinfo: ", userinfo);
      AuthService.login(userinfo).success(function(response){
        $state.go('home');
      }).error(function(err){
        console.log("err: err");
      });
    }

  });