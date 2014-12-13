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

  .controller( 'UsersController', function AboutController( $scope, titleService,$filter,$http, $sails, userdata ) {
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


//    self.users = [
//      {id: 1, username: 'xym1', group: "group 1", role: "guest", devs: ["d1", "d11", "d111"]},
//      {id: 2, username: 'xym2', group: "group 2", role: "guest", devs: ["d2"]},
//      {id: 3, username: 'xym3', group: "group 3", role: "guest", devs: ["d3"]}
//    ];

//    self.statuses = [
//      {value: 1, text: 'status1'},
//      {value: 2, text: 'status2'},
//      {value: 3, text: 'status3'},
//      {value: 4, text: 'status4'}
//    ];

    self.groups = [
      'group 1',
      'group 2',
      'group 3',
      'group 4',
      'group 5'
    ];

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
      console.log("before saveUser: ", data);
      angular.extend(data, {id: id});
//      todo: post to db back end
//      return $http.post('/saveUser', data);
    };

    // remove user
    self.removeUser = function(index) {
      console.log("");
//      self.users.splice(index, 1);
    };

  });
