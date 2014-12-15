/**
 * Created by xieyiming on 14-12-15.
 */

module.exports = function(req, res, next) {
  var token;

//  if(req.isSocket){
//    sails.log.info("is socket connect ha");
//    next();
//  }

  sails.log.info("normal role check token: ", req.token);

  User.findOne({id: req.token}).exec(function(err, user){
    if (err) { console.log(err) };

    console.log("role check found user: ", user);
    next();
  });

};



