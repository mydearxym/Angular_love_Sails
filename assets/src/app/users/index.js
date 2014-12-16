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
//      usergroups: function($http) {
//        return $http.get('/api/cmgroup/names');
//      }

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

  .controller( 'UsersController', function AboutController($scope, titleService,AuthService, $filter,$http, $sails, userdata) {
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

//    self.groups = usergroups.data;

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
    self.rolesWithId = [];
    self.groups = [];
    self.groupsWithId = [];

    // todo: listen the ongroup model
    self.loadGroups = function(){
      return self.groups.length ? null: $sails.get("/api/cmgroup/names").success(function(data){
        self.groupsWithId = data;
        self.groups = _.pluck(data, 'name');
        console.log("load groups: ", self.groups);
      }).error(function(err){
        if (err) { console.log(err) };
      });
    };

    self.loadRoles = function() {
      return self.roles.length ? null : $sails.get("/api/role/names", {token: AuthService.getToken()}).success(function(data) {
        console.log("loadRoles 2: ", data);
        self.rolesWithId = data;
        self.roles = _.pluck(data, 'name');
        console.log("loadRoles roles: ", self.roles);

      }).error(function(data){
        console.log("sails get error: ", data);
      });
    };

    self.showRole = function(user) {
      if(_.isUndefined(user.role)){
        return "not Set ha";
      } else {
//        console.log("showRole name: ", user);
        return user.role.name;
      }
//      return user.role.name? user.role.name: 'not set3';
    };

    self.showGroup = function(user) {
//      return user.group ? user.group:"Not set.";
      if (_.isUndefined(user.group)){
        return "Not set."
      } else {
        return user.group.length ? _.pluck(user.cmgroups, 'name').join(", "): "not set";
      }
    };

    self.checkName = function(data, id) {
      if (id === 2 && data !== 'awesome') {
        return "Username 2 should be `awesome`";
      }
    };

    self.saveUser = function(data, id) {
      //$scope.user not updated yet
      var groupids = [];
      var role = "";
      _(data.groups).map(function(name){
//        console.log("name(map): ", name);
        //todo: if not select any group, it's gonna crashed
        groupids.push(_.find(self.groupsWithId, {name:name}).id);
      });

      role = _.find(self.rolesWithId, {name: data.role}).id;
      data.role = role;
//      delete data.groups;
      data.groups = groupids;
      _.extend(data, {id: id});
      console.log("before saveUser(extend): ", data);
//      todo: make it sub/pub as realtime
      $sails.post("/api/user/update/"+id, {data: data});
    };

    // remove user
    self.removeUser = function(index) {
      console.log("remove User");
    };

  });
