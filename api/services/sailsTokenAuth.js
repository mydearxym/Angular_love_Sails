var jwt = require('jsonwebtoken');

module.exports = {

  //todo: change this func name, it's so silly
  generateToken: function(payload) {
    sails.log.info("user jwtsecret: ", sails.config.localconf.jwtSecret);
    var token = jwt.sign(payload, sails.config.localconf.jwtSecret || "monitorCloud");
    return token;
  },

  verifyToken: function(token, verified) {
    return jwt.verify(token, sails.config.localconf.jwtSecret || "monitorCloud", {}, verified);
  }

};




