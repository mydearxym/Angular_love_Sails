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

    User.create(model)
    .exec(function(err, model) {
      if (err) {
        return console.log(err);
      }
      else {
        User.publishCreate(model.toJSON());
        res.json(model);
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
//          name:       user.firstName + ' ' + user.lastName,
          name:       "mydearxym",
          from:       sails.config.nodemailer.from,
          to:         email,
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
//    sails.log.debug("resetpassword action params: ", params);

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

//    User.findOne({id: params.id}).exec(function(err, user){
//      console.log("findOne user: ", user);
//      if (err || _.isUndefined(user)) {
//        console.log(err)
//        // todo: replace the imgs from the 404.ejs
//        res.render("404.ejs");
//
//      } else {
//        res.view({
//          layout: 'auth-layout',
//          user: user
//        });
//      }
//    });

  },

  updatePassword: function(req, res) {
    var params = req.params.all();

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


