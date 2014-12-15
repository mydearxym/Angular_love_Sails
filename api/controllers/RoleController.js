/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function(req, res) {

    var model = {
      name: req.body.name
    };

    sails.log.info("Role create:  ", model);

    Role.create(model)
      .exec(function(err, model) {
        if (err) { return res.json(401, {err: 'create role failed'}) }
        sails.log.debug("role create done");

        res.json(model);
      });
  },

  getAllName: function(req, res) {
//    return res.json({msg: 'all the roles haha'});
    Role.getAllName()
      .then(function(models) {
        res.json(models);
      })
      .fail(function(err) {
        if (err) { console.log(err) };
      });
  }

};

