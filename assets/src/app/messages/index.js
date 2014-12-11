angular.module( 'monitorCloud.messages', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'messages', {
    url: '/messages',
    views: {
      "main": {
        controller: 'MessagesController as MessagesCtrl',
        templateUrl: 'messages/index.tpl.html'
      },
      'navbar': {
        controller: "HeaderCtrl",
        templateUrl: 'header/index.tpl.html'
      }
    },

    data: {
      permissions: {
        only: ['admin']
      }
    }
  });
})

//  todo: rename xxService to xxHelper
.controller( 'MessagesController', function($sails, config, titleService, MessageModel ) {
    titleService.setTitle('Messages');
    var self = this;

    self.newMessage = {};
    self.messages = [];
    self.currentUser = config.currentUser;

    $sails.on('message', function (envelope) {
      switch(envelope.verb) {
        case 'created':
          self.messages.unshift(envelope.data);
          break;
        case 'destroyed':
          _.remove(self.messages, {id: envelope.id});
          break;
      }
    });

    self.destroyMessage = function(message) {
      // check here if this message belongs to the currentUser
      console.log("destroyMessage");
      if (message.user.id === config.currentUser.id) {
        MessageModel.delete(message).then(function(model) {
          // message has been deleted, and removed from $scope.messages
        });
      }
    };

    self.createMessage = function(newMessage) {
      console.log("createMessage");
      newMessage.user = config.currentUser.id;
      MessageModel.create(newMessage).then(function(model) {
        self.newMessage = {};
      });
    };

    MessageModel.getAll().then(function(models) {
      console.log("getAll msg", models);
      self.messages = models;
    });
  })

