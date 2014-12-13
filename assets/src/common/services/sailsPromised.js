/**
 * Created by xieyiming on 14-12-13.
 */

angular.module('services.sailsPromised',[])

  .factory('$sailsPromised', function($sails, $q){
    function promised$sailsConnection(method, route, data){
      var deferred = $q.defer();

      if(!$sails.socket.connected){
        $sails.on('connect', function(){
          deferred.resolve($sails[method](route, data));
        });
      } else {
        deferred.resolve($sails[method](route, data));
      }
      return deferred.promise;
    }

    // expose $sails functions
    return {
      get: function(route, data){
        return promised$sailsConnection('get', route, data);
      }
    }
  })
