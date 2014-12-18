/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  getRecommends: function(req, res){

    return res.send({
      "categories": [
        {
          "name": "音乐",
          "id": "51c3ba66e4b0f0e851c1621b",
          "rooms": [
            {
              "id": "53922",
              "name": "晓说",
              "url": "http://img1.gtimg.com/ninja/0/ninja141869235620784.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "高晓松",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "53946",
              "name": "杨澜访谈录",
              "url": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "杨澜",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                },
                {
                  "id": "a23ab25",
                  "name": "杨澜1",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "53946",
              "name": "杨澜访谈录",
              "url": "http://img2.cache.netease.com/lady/2014/12/16/2014121622530399261.gif",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "杨澜",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                },
                {
                  "id": "a23ab25",
                  "name": "杨澜1",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            }
          ]
        },
        {
          "name": "相声",
          "id": "51c3ba66e4b0f0e851c1621c",
          "rooms": [
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img2.cache.netease.com/cnews/2014/12/17/201412170908215443b.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "53946",
              "name": "杨澜访谈录",
              "url": "http://img5.cache.netease.com/bbs/2014/12/16/20141216145857c02f8.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "杨澜",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                },
                {
                  "id": "a23ab25",
                  "name": "杨澜1",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img3.cache.netease.com/edu/2014/12/17/201412171140377f481.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            }
          ]
        },
        {
          "name": "旅游",
          "id": "51c3ba66e4b0f0e851c1621c",
          "rooms": [
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img5.cache.netease.com/lady/2014/12/17/2014121708512693624.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "53946",
              "name": "杨澜访谈录",
              "url": "http://img2.cache.netease.com/mobile/2014/12/17/2014121710462254ffc.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "杨澜",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                },
                {
                  "id": "a23ab25",
                  "name": "杨澜1",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img5.cache.netease.com/tech/2014/12/17/201412170924318a920.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            }
          ]
        },
        {
          "name": "体育",
          "id": "51c3ba66e4b0f0e851c1621c",
          "rooms": [
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img2.money.126.net/chart/hs/time/180x120/0000001.png",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "53946",
              "name": "杨澜访谈录",
              "url": "http://img4.cache.netease.com/auto/2014/12/17/20141217084413e9ae8.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "杨澜",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                },
                {
                  "id": "a23ab25",
                  "name": "杨澜1",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://s.cimg.163.com/i/img0.ph.126.net/pH3ZOo236O6EwpmuwB4T_A==/6619195239142178031.jpg.90x90.75.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            }
          ]
        },
        {
          "name": "影视",
          "id": "51c3ba66e4b0f0e851c1621c",
          "rooms": [
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img2.cache.netease.com/auto/2014/12/17/2014121708583806352.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "53946",
              "name": "杨澜访谈录",
              "url": "http://img5.cache.netease.com/cnews/2014/12/16/2014121621524994fa1.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "id": "a23ab24",
                  "name": "杨澜",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                },
                {
                  "id": "a23ab25",
                  "name": "杨澜1",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            },
            {
              "id": "153922",
              "name": "德云社",
              "url": "http://img6.cache.netease.com/cnews/2014/12/17/20141217113048b2553.jpg",
              "intro": "世界上最美的声音是人声……他们音域宽广，不同声部层次分明，堪称人声试机极品。 rnrn",
              "hosts": [
                {
                  "objectId": "a23ab25",
                  "name": "郭德纲",
                  "avatar": "http://mat1.gtimg.com/fashion/images/index/2014/12/16/Q1.jpg"
                }
              ],
              "location": {
                "id": "51fa6886e4b0cc0b5a3792e9",
                "name": "成都"
              }
            }
          ]
        }
      ]
    })
  },

  register: function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    ChatService.register(username, password, function(err, user){
      if (err) { return res.json(401, {error: err}) }

      res.json(200, user);
    })
  },

  createChatGroups: function(req, res) {
    var owner = req.body.owner;
    var groupname = req.body.groupname;

    if(_.isUndefined(owner) || _.isUndefined(groupname)){
      res.json(403, {error: 'request args error'});
    }

    var members = req.body.members || [];
    var maxusers = req.body.maxusers || 200;

    var comming_args = {
      "groupname": groupname,
      "desc":"create group test by mydearxym",
      "public": true,
      "maxusers":maxusers,
      "owner": owner,
      "members": members
    };

//    return res.json(200, comming_args );

    ChatService.createChatGroups(comming_args, function(err, msg){
      if (err) { return res.json(401, {error: err}); };
      res.json(200, msg);
    })

  }

  // todo: add a members to group


};

