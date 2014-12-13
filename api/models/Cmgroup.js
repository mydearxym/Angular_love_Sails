/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
      //todo add other attrs to see the return value
    },

    host: {
      type: "string",
      defaultTo: "noOne"
    },

    members: {
      collection: 'user',
      via: "cmgroups"
    },

    toJSON: function() {
      var obj = this.toObject();

      delete obj.updatedAt;
      delete obj.createdAt;
      return obj;
    }

  },

  getAllName: function(){

    return Cmgroup.find()
//      .populate("members")
      .then(function (models) {
        return _.pluck(models,'name');
//        return models;
      });
  }

};

