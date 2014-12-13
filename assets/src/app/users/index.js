angular.module( 'monitorCloud.users', [
  'xeditable'
]).run(function(editableOptions, editableThemes){
  editableOptions.theme = 'bs3';
  editableThemes.bs3.inputClass = 'input-sm';
  editableThemes.bs3.buttonsClass = 'btn-sm';
  editableThemes['default'].submitTpl = '<button type="submit">确定</button>';
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'users', {
    url: '/users',
    resolve: {
      userdata: function($sailsPromised, $http){
        // the $sails can't use here cause it may not connected yet
        // compare to wait for socket connect, i rather use HTTP directly
        // but the two method both work
//        return $sailsPromised.get("/api/user");
        return $http.get("/api/user");
      },
      usergroups: function($http) {
        return $http.get('/api/cmgroup/names');
      }

    },
    views: {
      "main": {
        controller: 'UsersController',
        templateUrl: 'users/index.tpl.html'
      },

      'navbar': {
        controller: "HeaderCtrl",
        templateUrl: 'header/index.tpl.html'
      }
    }
  });
})

  .controller( 'UsersController', function AboutController($scope, titleService,$filter,$http, $sails, userdata, usergroups) {
    titleService.setTitle('users');
//    var self = this;
    var self = $scope;

    self.users = userdata.data; // use userdata is you use $sailsPromised

//    $state.go('.', null, {reload: true});
    console.log("userdata: ", self.users);

    self.testget = function(){
      console.log("test clicked");

      $sails.get("/api/user/roles")
        .success(function(data){
          console.log("$sails get: ", data);
        })
        .error(function(data){
          console.log("sails get error: ", data);
        });
    };

    console.log("get usergroups: ", usergroups.data);

    self.groups = usergroups.data;

    self.devices = [
      "device1",
      "device2",
      "devce3",
      "device4",
      "device5",
      "devce6",
      "device10"
    ];

    self.roles = [];


    self.loadRoles = function() {
      return self.roles.length ? null : $sails.get("/api/user/roles").success(function(data) {
        console.log("loadRoles: ", data);
        self.roles = data.data;
      }).error(function(data){
        console.log("sails get error: ", data);
      });
    };

    self.showRole = function(user) {
      return user.role || 'not set3';
    };

    self.showGroup = function(user) {
//      return user.group ? user.group:"Not set.";
      if (_.isUndefined(user.group)){
        return "Not set."
      } else {
        return user.group.length ? user.group.join(", "): "not set";
      }
    };

    self.showDevs = function(user) {

//      var selected = [];
//      angular.forEach(self.devices, function(s) {
//        console.log("s: ", s);
//
//        if (user.devs.indexOf(s.value) >= 0) {
//          selected.push(s.text);
//        }
//      });
//      return selected.length ? selected.join(', ') : 'Not set';
//      return user.devs.length ? user.devs.join(", "): "not set";

    };

    self.checkName = function(data, id) {
      if (id === 2 && data !== 'awesome') {
        return "Username 2 should be `awesome`";
      }
    };

    self.saveUser = function(data, id) {
      //$scope.user not updated yet
      _.extend(data, {id: id});
      console.log("before saveUser(extend): ", data);
//      todo: make it sub/pub as realtime
      $sails.post("/api/user/update/"+id, {data: data});
    };

    // remove user
    self.removeUser = function(index) {
      console.log("");
//      self.users.splice(index, 1);
    };

  });
