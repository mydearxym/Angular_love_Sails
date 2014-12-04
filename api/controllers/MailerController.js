/**
 * MailerController
 *
 * @description :: Server-side logic for managing mailers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  test: function(req, res) {

    Emailer.send(function(err, ret) {
      if (err) { console.log(err) };
    });

    res.send({nodemailer: "done"});
  }
};

