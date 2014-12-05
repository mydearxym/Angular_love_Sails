module.exports = {
  getAll: function(req, res) {
    User.getAll()
    .spread(function(models) {
      res.json(models);
    })
    .fail(function(err) {
      // An error occured
    });
  },

  getOne: function(req, res) {
    User.getOne(req.param('id'))
    .spread(function(model) {
      res.json(model);
    })
    .fail(function(err) {
      // res.send(404);
    });
  },

  create: function (req, res) {
    var model = {
      username: req.param('username'),
      email: req.param('email'),
      first_name: req.param('first_name')
    };

    sails.log.info("UserCtrl create degian");
    User.create(model)
    .exec(function(err, model) {
        sails.log.info("UserCtrl create done");

        if (err) {
        return console.log(err);
      }
      else {
        User.publishCreate(model.toJSON());
        res.json(model);
      }
    });
  },

  activate: function(req, res) {
    var params = req.params.all();

    sails.log.debug('activation action');

//    res.send(params);

    User.update({
      id: params.id,
      activationToken: params.token
    },{
      activated: true
    }, function(err, user) {
      if (err) {
        sails.log.debug(err);
        res.send(500, err);
        // Updated users successfully!
      } else {
        sails.log.debug("User activated:", user);
        // todo: redirect to active ok page
        req.flash("info",  "Info.Activate.Ok");

        res.view("auth/login.ejs", {
          infos    : req.flash('info'),
          errors   : req.flash("error"),
          providers : {}
        });
      }
    });

  },


  reset: function(req, res){

    res.view({
        layout: 'auth-layout'
    });

  },

  resetEmail: function(req, res){
    var email = req.param('email')

    User.findOneByEmail(email, function(err, user){
      if (err) { console.log(err) };

      res.render('email/resetpassword.ejs', {user: user}, function(err, html){

        Emailer.send({
          name:       user.username,
          from:       sails.config.nodemailer.from,
          to:         user.email,
          subject:    'xym喊你重置密码',
          messageHtml: html
        }, function(err, response){
          sails.log.debug('nodemailer sent', err, response);
        });

        res.view({
          layout: "auth-layout",
          email: email
        });

      });
    });
  },

  resetEmailCallback: function(req, res) {
    var params = req.params.all();

    User.findOne().where({id:params.id, resetPassToken: params.token})
      .then(function(user){
        if (_.isUndefined(user)) {
          res.render("404.ejs");
        }else{
          res.view({
            layout: 'auth-layout',
            user: user
          })
        }
      })
      .catch(function(err){
        res.render("404.ejs");
      });
  },

  updatePassword: function(req, res) {
    var params = req.params.all();

    // todo: remove findOne use User.update directly like activate
    User.findOne().where({id:params.userid, resetPassToken: params.resettoken}).populate("passports")
      .then(function(user) {

        user.passports[_.findIndex(user.passports, {protocol: "local"})].password = params.newpassword;

        User.update({id:user.id}, user).exec(function(err){
          if (err) { sails.log.debug(err) };

          res.view("user/resetPasswordOK.ejs", {
            layout: "auth-layout",
            user: user
          });
        });
      });

  }
};


