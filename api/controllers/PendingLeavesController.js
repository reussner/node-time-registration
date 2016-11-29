/**
 * PendingLeavesController
 *
 * @description :: Server-side logic for managing Pendingleaves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	showPendingLeaves: function (req, res) {
    Leave.find({
      where: {
        rejected: false,
        approved: false
      },
      sort: "startDate ASC"
    }).exec(function (err, pendingLeaves) {
      var options = {
        title: "Pending leave requests",
        pendingLeaves: pendingLeaves
      };

      res.render('supervisor/pending-leave-requests', options);
    })
  }
};

