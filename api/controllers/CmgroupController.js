/**
 * CmgroupController
 *
 * @description :: Server-side logic for managing cmgroups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function(req, res) {

    var model = {
      name: req.body.name,
      host: req.body.host
    };

    sails.log.info("Cmgroup create:  ", model);

    Cmgroup.create(model)
      .exec(function(err, model) {
        if (err) { return res.json(401, {err: 'create cmgroup failed' })  }
        sails.log.debug("create done");

        res.json(model);
      });
  },

  getAllName: function(req, res) {

    Cmgroup.getAllName()
      .then(function(models) {
        res.json(models);
      })
      .fail(function(err) {
        if (err) { console.log(err) };
      });
  }


};

