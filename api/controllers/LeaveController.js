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
        lastLeaves: lastLeaves,
        calendar: getCurrentMonth()
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

function getCurrentMonth() {
  var currentDate = new Date();
  var monthStart = new Date(currentDate.valueOf()).addDays(-currentDate.getDate());
  var calendarStart = new Date(monthStart.valueOf()).addDays(-monthStart.getDay());
  // Show five weeks
  var monthEnd = new Date(calendarStart.valueOf()).addDays(35);
  var month = [];
  var week = [];
  while (calendarStart < monthEnd) {
    var day = {
      number: calendarStart.getDate(),
      date: calendarStart
    };
    week.push(day);
    if (calendarStart.getDay() == 6) {
      month.push(week);
      week = [];
    }
    calendarStart = calendarStart.addDays(1);
  }

  return month;
}

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};
