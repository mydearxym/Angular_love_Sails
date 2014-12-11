/**
 * Created by xieyiming on 14-12-9.
 */



angular.module('monitorCloud')
//  .factory('AuthHelper', function($http, LocalService, AccessLevels) {
  .service('AuthService', function($http, localStorageService, config) {
    var self = this;
    self.isAdmin = function(){
      return true;
    },

//    self.authorize = function(access) {
//      if (access === AccessLevels.user) {
//        return this.isAuthenticated();
//      } else {
//        return true;
//      }
//    },
//
//    self.isAuthenticated = function() {
//      return LocalService.get('auth_token');
//    },

    self.getCurrentUser = function(){
      return localStorageService.get('user');
    };

    self.login = function(userinfo) {
      console.log("login userinfo: ", userinfo);
      return $http.post('/auth/login', userinfo)
        .success(function(response) {
          localStorageService.set("user", response.user);
          localStorageService.set("auth_token", response.token);
        })
    };

    self.logout = function() {
        // The backend doesn't care about logouts, delete the token and you're good to go.
      console.log("user logout");

      localStorageService.remove('user');
      localStorageService.remove('auth_token');
    };

    self.register = function(userinfo) {
//        localStorageService.remove('auth_token');
      return $http.post('/auth/register', userinfo)
        .success(function(response){
          localStorageService.set("user", response.user);
          localStorageService.set("auth_token", response.token);
        });
    };
  })
  .service("AuthInterceptor", function($q,$injector){
    var self = this;
    var localStorageService = $injector.get("localStorageService");

    self.request = function(config) {
      var token = localStorageService.get('auth_token');

      if( token ) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },

    self.responseError = function(rejection) {
      if (response.status === 401 || response.status === 403) {
        localStorageService.remove('auth_token');
        var stateService = $injector.get("$state");
        stateService.go('login');
      }
      return $q.reject(rejection);
    }

  })

  .config(function($httpProvider){
    $httpProvider.interceptors.push("AuthInterceptor");
  });



