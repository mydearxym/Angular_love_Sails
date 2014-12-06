/**
 * Created by xieyiming on 14-12-6.
 */


module.exports = function(req, res, next) {
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller

//  if (req.session.authenticated) {
//    return next();
//  }
//
//  return res.forbidden('You are not permitted to perform this action.');

  return next();
};
