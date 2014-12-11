angular.module( 'monitorCloud', [
  'ui.router',
  'ngSails',
  'angularMoment',
  'lodash',
  'ui.bootstrap',
  'w5c.validator',
  'templates-app',
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

  .run( function() {
    moment.lang('zh-cn'); // en
  })

  .controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
    config.currentUser = window.currentUser;
});