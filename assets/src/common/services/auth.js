/**
 * Created by xieyiming on 14-12-9.
 */



angular.module('monitorCloud')
//  .factory('AuthHelper', function($http, LocalService, AccessLevels) {
  .service('AuthService', function($http, localStorageService, config) {
    var self = this;
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
    self.getCurrentUser = function(){
      return localStorageService.get('user');
    };

    self.login = function(credentials) {
      return $http.post('/auth/login', credentials)
        .success(function(response) {
          localStorageService.set("user", response.user);
          localStorageService.set("auth_token", response.token);
        });
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
        .then(function(response){
          if(response.data.token) {
            localStorageService.set("user", response.data.user);
            self.currentUser = response.data.user;
            localStorageService.set("auth_token", response.data.token);
            return 'ok';
          } else {
            return 'fail';
          }
        })
    };

  });


//.factory('AuthService', function($http, localStorageService, config) {
//  return {
////      authorize: function(access) {
////        if (access === AccessLevels.user) {
////          return this.isAuthenticated();
////        } else {
////          return true;
////        }
////      },
////      isAuthenticated: function() {
////        return LocalService.get('auth_token');
////      },
//    currentUser: false,
//
//    login: function(credentials) {
//      return $http.post('/auth/login', credentials)
//        .success(function(response) {
//          localStorageService.set("user", response.user);
//          localStorageService.set("auth_token", response.token);
//        });
//    },
//
//    logout: function() {
//      // The backend doesn't care about logouts, delete the token and you're good to go.
//      localStorageService.remove('user');
//      localStorageService.remove('auth_token');
//    },
//
//    register: function(userinfo) {
////        localStorageService.remove('auth_token');
//      return $http.post('/auth/register', userinfo)
//        .then(function(response){
//          if(response.data.token) {
//            localStorageService.set("user", response.data.user);
//            currentUser = response.data.user;
//            localStorageService.set("auth_token", response.data.token);
//            return 'ok';
//          } else {
//            return 'fail';
//          }
//        })
//    }
//  }
//});
