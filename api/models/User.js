var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },

    activated: {
      type: 'boolean',
      defaultsTo: false
    },

    activationToken: {
      type: 'string'
    },
    resetPassToken: {
      type: 'string'
    },

    firstname: {
      type: 'string'
//      required: true
    },

    message_count: {
      type: 'number'
    },


    // A User can have many messages
    messages: {
      collection: 'message',
      via: 'user'
    },
    passports : { collection: 'Passport', via: 'user' }
  },

//  toJSON: function() {
//    var obj = this.toObject();

//    delete obj.activationToken;
//    delete obj.resetPassToken;
//    delete obj.activated;

//    return obj;
//  },

  beforeCreate: function(user, cb) {
    user.activated = false;
    user.activationToken = crypto.token(new Date().getTime()+user.email);
    user.resetPassToken = crypto.token(new Date().getMilliseconds()+user.email);

    return cb(null, user);
  },

  getAll: function() {
    return User.find()
    .then(function (models) {
      return [models];
    });
  },

  getOne: function(id) {
    return User.findOne(id)
    .then(function (model) {
      return [model];
    });
  }
};