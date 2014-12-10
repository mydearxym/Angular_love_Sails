/**
 * Created by xieyiming on 14-12-9.
 */



angular.module('monitorCloud')
//  .factory('AuthHelper', function($http, LocalService, AccessLevels) {
  .factory('AuthService', function($http, localStorageService) {
    return {
//      authorize: function(access) {
//        if (access === AccessLevels.user) {
//          return this.isAuthenticated();
//        } else {
//          return true;
//        }
//      },
//      isAuthenticated: function() {
//        return LocalService.get('auth_token');
//      },
      login: function(credentials) {
        return $http.post('/auth/login', credentials)
          .success(function(response) {
            localStorageService.set("user", response.user);
            localStorageService.set("auth_token", response.token);
          });
      },

      logout: function() {
        // The backend doesn't care about logouts, delete the token and you're good to go.
        localStorageService.remove('user');
        localStorageService.remove('auth_token');
      },

      register: function(userinfo) {
//        localStorageService.remove('auth_token');
        return $http.post('/auth/register', userinfo)
          .success(function(response){
            localStorageService.set("user", response.user);
            localStorageService.set("auth_token", response.token);
          })
      }
    }
  });


//  .factory('Auth', function($http, LocalService, AccessLevels) {
//    return {
//      authorize: function(access) {
//        if (access === AccessLevels.user) {
//          return this.isAuthenticated();
//        } else {
//          return true;
//        }
//      },
//      isAuthenticated: function() {
//        return LocalService.get('auth_token');
//      },
//      login: function(credentials) {
//        var login = $http.post('/auth/authenticate', credentials);
//        login.success(function(result) {
//          LocalService.set('auth_token', JSON.stringify(result));
//        });
//        return login;
//      },
//      logout: function() {
//        // The backend doesn't care about logouts, delete the token and you're good to go.
//        LocalService.unset('auth_token');
//      },
//      register: function(formData) {
//        LocalService.unset('auth_token');
//        var register = $http.post('/auth/register', formData);
//        register.success(function(result) {
//          LocalService.set('auth_token', JSON.stringify(result));
//        });
//        return register;
//      }
//    }
//  })


//  .factory('AuthInterceptor', function($q, $injector) {
//    var LocalService = $injector.get('LocalService');
//
//    return {
//      request: function(config) {
//        var token;
//        if (LocalService.get('auth_token')) {
//          token = angular.fromJson(LocalService.get('auth_token')).token;
//        }
//        if (token) {
//          config.headers.Authorization = 'Bearer ' + token;
//        }
//        return config;
//      },
//      responseError: function(response) {
//        if (response.status === 401 || response.status === 403) {
//          LocalService.unset('auth_token');
//          $injector.get('$state').go('anon.login');
//        }
//        return $q.reject(response);
//      }
//    }
//  })
//  .config(function($httpProvider) {
//    $httpProvider.interceptors.push('AuthInterceptor');
//  });