/**
 * Authentication Controller
 *
 */


var AuthController = {

  login: function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

//    User.findOneByEmail(email, function(err, user))

    var user = {
      id: "fake id",
      email: email,
      password: password
    };
    sails.log.debug("login: ", user);
    res.json({user:user, token: sailsTokenAuth.generateToken({sid: user.id})});
  },


  register: function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

//    todo: check confirmPassword too
    User.create({email:email, username: username, password: password})
      .exec(function(err, user){
        if (err) {
          res.json(err.status, {err: err});
          return;
        }
        if (user) {
//          res.json({msg: "error happend"});
          res.json({user: user.toJSON(), token: sailsTokenAuth.generateToken({sid: user.id})});
        }
    })
  }

};

module.exports = AuthController;
