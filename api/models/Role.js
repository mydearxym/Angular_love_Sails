/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    members: {
      collection: 'user',
      via: "role"
    },

    toJSON: function() {
      var obj = this.toObject();

      delete obj.updatedAt;
      delete obj.createdAt;
      return obj;
    }
  },

  getAllName: function(){

    return Role.find()
//      .populate("members")
      .then(function (models) {
//        return _.pluck(models,'members');
//        return _.pluck(models,'name');
//        _(models).forEach(function(model){
//          delete model.host;
//        });
        return models;
      });
  }




};

