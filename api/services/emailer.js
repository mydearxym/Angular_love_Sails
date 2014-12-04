/**
 * Created by xieyiming on 14-12-3.
 */


var nodemailer = require('nodemailer');

module.exports = {

  send: function(cb) {
    var transport = nodemailer.createTransport("SMTP", {
      host: "smtp.163.com",
      auth: {
//        user: "xymiscool@163.com",
//        pass: "Woshi163710"
        user: sails.config.nodemailer.user,
        pass: sails.config.nodemailer.pass
      }
    });

//    var from  = email.from || 'nobody@nobody.com';
    var subject = null;

    if (sails.config.nodemailer.prepend_subject){
      subject = sails.config.nodemailer.prepend_subject;
    }

    var mailOptions = {
      from: sails.config.nodemailer.user,
//      to: "xymiscool@163.com",
      to: "mydearxym@qq.com",
      subject: subject,
      html: "this is html part"
    };
    console.log("mailOptions: " , mailOptions);

    transport.sendMail(mailOptions, function(err, response){
      if(err) return cb(err);
      return cb(null, response);
    });
  }

};

