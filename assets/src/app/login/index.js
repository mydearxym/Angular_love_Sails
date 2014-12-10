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

  .controller( 'LoginCtroller', function AboutController(titleService,$state, AuthService, localStorageService) {
    var self = this;

    titleService.setTitle('Login');
//    localStorageService.set("simon", "26 years old");

    self.user = {};
    self.login = function(){
//     todo: rename to getjwtToken/getToken

      AuthService.login(self.user).success(function(response){
        console.log("todo: $state.go home");
      }).error(function(err){
//        self.errors.push(err);
        console.log("err: err");
      });
    }

  });