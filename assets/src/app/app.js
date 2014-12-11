angular.module( 'monitorCloud', [
  'ui.router',
  'ngSails',
  'angularMoment',
  'lodash',
  'ui.bootstrap',
  'w5c.validator',
  'templates-app',
  'permission',
  'cgNotify',
  'services',
  'models',

  'monitorCloud.login',
  'monitorCloud.register',

  'monitorCloud.header',
  'monitorCloud.home',
  'monitorCloud.about',
  'monitorCloud.users',
  'monitorCloud.messages'
])

  .config(function( $stateProvider, $urlRouterProvider, $locationProvider) {
    // todo: move it to a route.js
    // $urlRouterProvider.otherwise( '/home' );
    $urlRouterProvider.otherwise(function ($injector, $location) {
      if ($location.$$url === '/') {
        window.location = '/home';
      }
      else {
        // pass through to let the web server handle this request
        window.location = $location.$$absUrl;
      }
    });
    $locationProvider.html5Mode(true);
  })

  .run( function(Permission, AuthService, $rootScope, notify) {
    moment.lang('zh-cn'); // en

    Permission.defineRole('admin', function (stateParams) {
      if(AuthService.isAdmin()) {
        return false; // Is anonymous
      }
      return false;
    });

    notify.config({duration: 3000});

    $rootScope.$on("$stateChangePermissionDenied", function(){
      console.warn('你权限不够哈1');
      //todo: use alert in IE
      notify({message: '对不起，您的权限不够哈 !', classes: "alert-danger"});
    })
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
  });