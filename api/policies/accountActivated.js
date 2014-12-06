/**
 * Created by xieyiming on 14-12-6.
 */


module.exports = function(req, res, next){

//  todo
  if (req.session.isActivated){
    return next();
  } else {
    sails.log.error("policies authenticated.js redirect to /login");
//    return res.redirect('/login/');

    return res.send({error: "对不起，您的账号尚未激活"});
  }
};
