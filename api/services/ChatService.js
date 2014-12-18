/**
 * Created by xieyiming on 14-12-3.
 */

var request = require('request');

var SITE_ROOT = 'http://a1.easemob.com/rstest/chatroom/';
//var SITE_ROOT = 'https://a1.easemob.com/rstest/chatroom/';
var CLIENT_ID = 'YXA6Sxn7IIWWEeSt6C1GF2nkUw';
var CLIENT_SECRET = 'YXA6O0hrXaL1Q2Fg4VX70HE20ibV_74';
var TOKEN = 'YWMtWGTVvoZgEeSPjYFPAu0GggAAAUuQSXayOPDCkTsGWw6pekWk-3V1gRk5cyE';

var DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
  'Accept': 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-us,en,zh;q=0.5',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
  'Authorization': 'Bearer ' + TOKEN,
  // 'Connection': 'keep-alive',
  'Cache-Control': 'max-age=0'
};


var do_request = function(url, method, args, cb){

  request({
    url: SITE_ROOT + url,
    method: method,
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(args)

  }, function(err, res, body){
    var error = JSON.parse(res.body).error;
    var error_description = JSON.parse(res.body).error_description;

//    if (error) { return res.json(401, {error: error})}
    if (error) { console.log(error) };

    if (error) { return cb (error + ": " + error_description)}
//    console.log(res.body);
    cb(null, JSON.parse(res.body));
  })
};

var get_access_token = function(){
  var request_opts = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'client_credentials'
  };

  console.log("do request ..", SITE_ROOT + 'token');
  console.log("request_opts:", request_opts);

  var token_url = 'token?' + 'client_id=' + CLIENT_ID + '&client_secret='+CLIENT_SECRET + '&grant_type=client_credentials';

  request({
    url: SITE_ROOT + token_url,
    method: "GET"
//    body: JSON.stringify(request_opts)
  }, function(err, res, body){
    var error = JSON.parse(res.body).error;
    var error_description = JSON.parse(res.body).error_description;

    if (error) { console.log(error + ": " + error_description)}

//    console.log("body: " + JSON.parse(res.body).access_token);
  })
};

//console.log("get_access_token ..");
//get_access_token();


module.exports = {
  //todo: recheck the token valied

  register: function(username, password, cb){
    console.log("ChatService: register");
    do_request("users", "POST", {username: username, password:password}, function(err, user){
      if (err) { return cb(err) };
      cb(null, user);
    })
  },

  createChatGroups: function(args, cb) {

    var default_opts = {
      "groupname":"defaultgroup", //群组名称, 此属性为必须的
      "desc":"server create group", //群组描述, 此属性为必须的
      "public":true, //是否是公开群, 此属性为必须的
      "maxusers":300, //群组成员最大数(包括群主), 值为数值类型,默认值200,此属性为可选的
      "approval":true, //加入公开群是否需要批准, 没有这个属性的话默认是true, 此属性为可选的
      "owner":"simon", //群组的管理员, 此属性为必须的
      "members":["jma2","jma3"] //群组成员,此属性为可选的,但是如果加了此项,数组元素至少一个
    };

    var request_opts = _.extend(default_opts, args);

    console.log("request_opts: ", request_opts);

    do_request("chatgroups","POST", request_opts, function(err, msg){
      if (err) {
        console.log("createChatGroups error: ", err);
        return cb(err);
      };

      cb(null, msg);
    });
  }

};



