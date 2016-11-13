/**
 * LeaveController
 *
 * @description :: Server-side logic for managing Leaves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	page: function (req, res) {
    Leave.find({
      where: {
        owner: 'AR',
        approved: true
      },
      sort: 'endDate DESC',
      limit: 5
    }).exec(function (err, lastLeaves) {
      var options = {
        title: 'Apply for leave',
        lastLeaves: lastLeaves
      };
      res.render('apply-for-leave', options);
    });
  },

  sendLeaveRequest: function (req, res) {
    var leave = {
      approved: false,
      owner: 'AR',
      leaveType: req.body.leaveType,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      comment: req.body.comment,
      days: req.body.days
    };

    Leave.create(leave).exec(function (err, records) {

    });

    res.redirect('back');
  }
};

