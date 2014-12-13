/**
 * CmgroupController
 *
 * @description :: Server-side logic for managing cmgroups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

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

