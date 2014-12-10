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

  .controller( 'RegisterCtroller', function AboutController(titleService, AuthService, $state ) {
    var self = this;
    titleService.setTitle('register');

    self.user = {};
    self.errors = [];
    self.register = function() {
      console.log("before user register: ", self.user);

      AuthService.register(self.user).then(function(response){
        console.log("AuthService.register: ", response);
        if(response == 'ok') {
          $state.go('home')
        } else {
          self.errors.push("register fails")
        }
      })
    }
  });