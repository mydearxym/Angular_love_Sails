angular.module( 'monitorCloud', [
  'ui.router',
  'ngSails',
  'angularMoment',
  'lodash',
  'ui.bootstrap',
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

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
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

.run( function run () {
//  moment.lang('en');
    moment.lang('zh-cn');
  })

.controller( 'AppCtrl', function AppCtrl ( $scope, config ) {
  config.currentUser = window.currentUser;
});