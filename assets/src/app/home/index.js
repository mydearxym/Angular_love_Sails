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

  .controller('HomeCtrl', function HomeController( $scope, titleService, $http, $sails, $interval) {
    titleService.setTitle('Home');
    var self = $scope;

    self.testfunc = function(){

//      $http.get("/auth/testfunc").success(function(response){
//        console.log("1");
//        console.log("response: ", response);
//        console.log("2");
//
//      }).error(function(err){
//
//        console.log("err: ", err.err);
//      });

      $http.get("/auth/testfunc").success(function(response){
        console.log("http get testfunc: ", response);
      }).error(function(err){
        console.log("err: "+  err);
      })

    };

    self.testsocket = function(){
      console.log("testsocket clicked");

//      $interval(function(){
        $sails.get("/auth/testfunc", {hello: "this is mydaerxym ha"}).success(function(data){
            console.log("data: ", data);
        });
//      },20)
    };
  });

