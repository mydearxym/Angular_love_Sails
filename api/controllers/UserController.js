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

      res.render('email/resetpassword.ejs', {user: user}, function(err, list){

        Emailer.send({
//          name:       user.firstName + ' ' + user.lastName,
          name:       "mydearxym",
          from:       sails.config.nodemailer.from,
          to:         email,
          subject:    'xym喊你重置密码',
          messageHtml: list
        }, function(err, response){
          sails.log.debug('nodemailer sent', err, response);
        });

//        res.send({todo: "send you a email already sent page"});
        res.view({
          layout: "auth-layout",
          email: email
        });

//        res.redirect('/login');

      });

//      res.send({"found user": user});
    });
  },

  resetEmailCallback: function(req, res) {
    var params = req.params.all();
    sails.log.debug("resetpassword action");

    User.findOne({id: params.id}).exec(function(err, user){
      console.log("findOne user: ", user);
      if (err || _.isUndefined(user)) {
        console.log(err)
        // todo: replace the imgs from the 404.ejs
        res.render("404.ejs");

      } else {
        res.view({
          layout: 'auth-layout',
          user: user
        });
      }
    });

  }
};


