/**
 * Created by xieyiming on 14-12-10.
 */

angular.module('services.localStorage', ['LocalStorageModule'])
  .config(function(localStorageServiceProvider){
    localStorageServiceProvider
      .setPrefix('mc')
      .setStorageType('localStorage');
    //    localStorageServiceProvider.setStorageType('sessionStorage');

  })

  .factory('todo', function() {

  });


