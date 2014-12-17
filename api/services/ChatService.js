/**
 * Created by xieyiming on 14-12-17.
 */



/**
 * Created by xieyiming on 14-12-3.
 */


var request = require('request');


//var SITE_ROOT = 'http://a1.easemob.com/rstest/chatroom/';
var SITE_ROOT = 'https://a1.easemob.com/rstest/chatroom/';


var do_request = function(url, method, args, cb){

  request({
    url: SITE_ROOT + url,
    method: method,
    body: JSON.stringify(args)

  }, function(err, res, body){
    var error = JSON.parse(res.body).error;

//    if (error) { return res.json(401, {error: error})}
    if (error) { return cb (error)}
//    console.log(res.body);
    cb();
  })
};

do_request("users", "POST", {username: 'xym4', password: "xym123456"}, function(err){
  if (err) { console.log(err) };
//  if (err) { return res.json(401, {error: err})}

});


module.exports = {

  register: function(username, password, cb){
    console.log("ChatService: register");
    do_request("users", "POST", {username: username, password:password}, function(err){
      if (err) { return cb(err) };

      cb();
    })
  }
};

