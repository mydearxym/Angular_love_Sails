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

    role: {
      type: "string",
      enum: ["normal", "groupAdmin", "superadmin"],
      defaultsTo: "normal"
    },

    group: {
      type: "array",
      defaultsTo: ["infomedia"]
    },

    password: {
      type: "string"
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

    message_count: {
      type: 'number'
    },

    // A User can have many messages
    messages: {
      collection: 'message',
      via: 'user'
    },

    passports : { collection: 'Passport', via: 'user' },

    toJSON: function() {
      var obj = this.toObject();

      delete obj.password;
      delete obj.activationToken;
      delete obj.resetPassToken;
      delete obj.updatedAt;
      delete obj.createdAt;

      return obj;
    }

  },

  beforeCreate: function(user, next) {
    sails.log.debug("User before created: ", user);

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        user.activated = false;
        user.activationToken = crypto.token(new Date().getTime()+user.email);
        user.resetPassToken = crypto.token(new Date().getMilliseconds()+user.email);
        next();
      });
    });
  },

  validPassword: function(password, user, cb) {
    bcrypt.compare(password, user.password, function(err, match) {
      if (err) cb(err);

      if (match) {
        cb(null, true);
      } else {
        cb(err);
      }
    });
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