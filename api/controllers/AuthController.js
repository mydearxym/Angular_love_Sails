/**
 * Authentication Controller
 *
 */
var validator = require('validator');

var AuthController = {

  testfunc: function(req, res){
    console.log("inside testfunc: ", req.body.hello);

    return res.json({data: 'this is testfunc from sails'});
  },

  login: function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var isEmail = validator.isEmail(email);
    var query   = {};

    sails.log.debug("login action: ", email);

    if (!email || !password) {
      sails.log.error("(401, {err: 'username and password required'})");
      return res.json(401, {err: 'username and password required'});
    }

    if (isEmail) {
      query.email = email;
    } else {
      query.username = email;
    }

    User.findOne(query).exec(function (err, user) {
      if (err) { return res.json(401, {err: 'dabase error'}) }

      if (!user) {
        if (isEmail) {
          sails.log.error("401, {err: 'Email not found'");
          return res.json(401, {err: 'Email not found'});
        } else {
          sails.log.error("err: 'Username not found'}");
          return res.json(401, {err: 'Username not found'});
        }
      }

      User.validPassword(password, user, function(err, valid){
        if(err) {res.json(403, {err: 'forbidden'})}

        if (!valid) {
          sails.log.error("err: 'invalid username or password'");
          return res.json(401, {err: 'invalid username or password'});
        } else {
          res.json({user:user, token: sailsTokenAuth.generateToken({sid: user.id})});
        }
      });
    })
  },

  register: function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
//    var group = req.body.group || "defaultGroup"// todo: maybe this is a array

//    todo: check confirmPassword too
//    User.create({email:email, username: username, password: password})
    User.create({email:email, username: username, password: password})
      .exec(function(err, user){
        if (err) {
          return res.json(401, {err: 'register fail'});
        }
        if (user) {
          res.json({user: user.toJSON(), token: sailsTokenAuth.generateToken({sid: user.id})});
        }
    })
  }

};

module.exports = AuthController;
