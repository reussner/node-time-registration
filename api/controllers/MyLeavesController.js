/**
 * MyLeavesController
 *
 * @description :: Server-side logic for managing Myleaves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Q = require('q');

module.exports = {
	viewLeaves: function (req, res) {
    var owner = "AR";
    Q.all([
      Leave.find({
        owner: owner,
        approved: true
      }),
      Leave.find({
        owner: owner,
        approved: false,
        rejected: false
      }),
      Leave.find({
        owner: owner,
        approved: false,
        rejected: true
      })
    ]).spread(function (approved, requested, rejected) {
      var options = {
        title: "My Leaves",
        approved: approved,
        requested: requested,
        rejected: rejected
      };

      res.render('user/my-leaves', options);
    })
  }
};

