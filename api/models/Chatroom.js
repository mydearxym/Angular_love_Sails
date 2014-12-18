/**
* Chatroom.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  types: {

    arrayMax5: function(theArray){
      return theArray.length <= 5;
    }
  },

  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },

    description: {
      type: 'string'
    },

    tags: {
      type: 'array',
      arrayMax5: true
    },

    location: {
      type: 'string'
    },

    streamurl: {
      type: 'string',
      url: true
    },

    ispublic: {
      type: 'boolean'
    },

    maxnumber: {
      type: 'integer',
      defaultsTo: 200
    },

    owner: {
      model: 'user'
    },

    managers: {
      collection: "user",
      via: "chatroommanager"
    },

    blacklist: {
      collection: "user",
      via: 'chatroomblack'
    },

    follows: {
      collection: "user",
      via: 'followchatrooms'
    },

    userlist: {
      collection: "user",
      via: 'chatroomlist'
    }

  }
};

