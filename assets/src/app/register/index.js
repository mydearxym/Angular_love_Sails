angular.module( 'monitorCloud.register', [])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'register', {
      url: '/register',
      views: {
        "main": {
          controller: 'RegisterCtroller as RegisterCtrl',
          templateUrl: 'register/index.tpl.html'
        },
        'navbar': {
          controller: "HeaderCtrl",
          templateUrl: 'header/index.tpl.html'
        }
      }
    })
  })

  .config(["w5cValidatorProvider", function (w5cValidatorProvider) {
    // 全局配置
    w5cValidatorProvider.config({
      blurTrig: false,
      showError: true,
      removeError: true

    });

    w5cValidatorProvider.setRules({
      email: {
        required: "输入的邮箱地址不能为空",
        email: "输入邮箱地址格式不正确"
      },
      username: {
        required: "输入的用户名不能为空",
        pattern: "用户名必须输入字母、数字、下划线",
        w5cuniquecheck:"输入用户名已经存在，请重新输入"
      },
      password: {
        required: "密码不能为空",
        minlength: "密码长度不能小于{minlength}",
        maxlength: "密码长度不能大于{maxlength}"
      },
      repeatPassword: {
        required: "重复密码不能为空",
        repeat: "两次密码输入不一致"
      },
      number: {
        required: "数字不能为空"
      }
    });
  }])

  .controller( 'RegisterCtroller', function AboutController($scope, titleService, AuthService, $state ) {
//    var self = this;
    var self = $scope;

    titleService.setTitle('register');

    self.user = {};
    self.errors = [];
    self.register = function(userinfo) {
      console.log("before user register: ", userinfo);

      AuthService.register(userinfo).success(function(response){
        $state.go('home')
      }).error(function(err){
        self.errors = [];
        self.errors.push(err.err);
      });

//      AuthService.register(userinfo).then(function(response){
//        console.log("AuthService.register: ", response);
//        if(response == 'ok') {
//          $state.go('home')
//        } else {
//          self.errors.push("register fails")
//        }
//      })

    };

    // for the form valiation
    var vm = $scope.vm = {
      htmlSource: "",
      showErrorType: 1
    };

    //每个表单的配置，如果不设置，默认和全局配置相同
    vm.validateOptions = {
      blurTrig: true
    };

  });