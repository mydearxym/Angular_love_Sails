var jwt = require('jsonwebtoken');

module.exports = {

  //todo: change this func name, it's so silly
  issueToken: function(payload) {
    var token = jwt.sign(payload, sails.localconf.localconf || "monitorCloud");
    return token;
  },

  verifyToken: function(token, verified) {
    return jwt.verify(token, sails.localconf.localconf || "monitorCloud", {}, verified);
  }

};




