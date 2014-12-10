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

  .controller( 'RegisterCtroller', function AboutController( $scope, titleService, AuthService ) {
    var self = this;
    titleService.setTitle('register');

    self.user = {};
    self.register = function(){
      console.log("before user register: ", self.user);
      AuthService.register(self.user).success(function(response){
        console.log("todo: $state.go home");
      }).error(function(err){
//        self.errors.push(err);
        console.log("err: err");
      });
    }


  });