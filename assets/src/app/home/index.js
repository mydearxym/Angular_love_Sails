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

  .controller('HomeCtrl', function HomeController( $scope, titleService ) {
    titleService.setTitle('Home');
  });

