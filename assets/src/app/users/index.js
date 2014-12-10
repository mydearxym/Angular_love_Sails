angular.module( 'monitorCloud.users', [
  'xeditable'
]).run(function(editableOptions, editableThemes){
  editableOptions.theme = 'bs3';
  editableThemes.bs3.inputClass = 'input-xs';
  editableThemes.bs3.buttonsClass = 'btn-xs';
  editableThemes['default'].submitTpl = '<button type="submit">确定</button>';
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'users', {
    url: '/users',
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

  .controller( 'UsersController', function AboutController( $scope, titleService,$filter,$http, $sails ) {
    titleService.setTitle('users');
    var self = this;

    self.testget = function(){
      console.log("test clicked");

//      $http.get("/testget").then(function(data){
//        console.log("$http get: ", data);
//      });

      $sails.get("/api/user/roles")
        .success(function(data){
          console.log("$sails get: ", data);
        })
        .error(function(data){
          console.log("sails get error: ", data);
        });
    };

    self.users = [
      {id: 1, username: 'xym1', status: 2, role: "guest", devs: ["d1", "d11", "d111"]},
      {id: 2, username: 'xym2', status: undefined, role: "guest", devs: ["d2"]},
      {id: 3, username: 'xym3', status: 2, role: "guest", devs: ["d3"]}
    ];

    self.statuses = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'},
      {value: 4, text: 'status4'}
    ];

    self.devices = [
      "device1",
      "device2",
      "devce3",
      "device4",
      "device5",
      "devce6",
      "device7",
      "device8",
      "devce9",
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

    self.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')(self.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
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
      return user.devs.length ? user.devs.join(", "): "not set";

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
