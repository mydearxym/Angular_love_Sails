angular.module( 'monitorCloud.home', [])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        "main": {
          controller: 'HomeCtrl',
          templateUrl: 'home/index.tpl.html'
        },
        'navbar': {
          controller: "HeaderCtrl",
          templateUrl: 'header/index.tpl.html'
        }
      }
    });
  })

  .controller('HomeCtrl', function HomeController( $scope, titleService, $http ) {
    titleService.setTitle('Home');
    var self = $scope;

    self.testfunc = function(){

      $http.get("/auth/testfunc").success(function(response){

        console.log("response: ", response);

      }).error(function(err){

        console.log("err: ", err.err);

      });

      console.log("testfunc btn");
    }

  });

