/**
* Channel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },

    description: {
      type: 'string'
    },

    enable: {
      type: 'boolean'
    },

    location: {
      type: 'array'
    },

    freq: {
      type: 'string'
    },

    creator: {
      type: 'string'
    },

    manager: {
      model: 'user'
    },

    chatroom: {
      model: 'chatroom'
    },

    programlist: {
      type: 'array'
    }
  }
};

