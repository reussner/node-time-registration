/**
 * LeaveController
 *
 * @description :: Server-side logic for managing Leaves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Q = require('q');

module.exports = {
  page: function (req, res) {
    Q.all([
        Leave.find({
          where: {
            owner: 'AR',
            approved: true
          },
          sort: 'endDate DESC',
          limit: 5
        }),
        Leave.find({
          where: {
            approved: true,
            startDate: {'>=': getCalendarStart(new Date())}
          },
          sort: 'startDate ASC'
        })
      ]
    ).spread(function (lastLeaves, calendarLeaves) {
      var calendarJson = getLeaveDateJson(calendarLeaves);
      var month = getCurrentMonth();
      var currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      var previousMonth = currentDate.getMonth() - 1;

      var options = {
        title: 'Apply for leave',
        lastLeaves: lastLeaves,
        calendar: month,
        calendarEvents: calendarJson,
        currentDate: currentDate,
        previousMonth: previousMonth
      };

      res.render('apply-for-leave', options);
    }).fail(function (err) {
      console.log(err);
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
      days: req.body.days,
      rejected: false
    };

    Leave.create(leave).exec(function (err, records) {
      var mailOptions = {
        leaveId: records.id,
        leaveOwner: leave.owner
      };

      EmailService.sendLeaveRequest(mailOptions, function (err) {
        if (err) {
          return res.serverError(err);
        }
        return res.ok();
      });

      res.redirect('back');
    });
  },

  checkLeaveRequest: function (req, res) {
    var objectId = req.params.id;

    Leave.find({
      where: {
        _id: objectId
      }
    }).exec(function (err, results) {
      var leave = results[0];
      startDate = new Date(leave.startDate.valueOf()).addDays(-7);
      endDate = new Date(startDate.valueOf()).addDays(14);

      Leave.find({
        where: {
          approved: true,
          startDate: {
            ">=": startDate,
            "<=": endDate
          }
        },
        sort: "startDate ASC"
      }).exec(function (err, results) {
        var options = {
          title: "Check leave request",
          leave: leave,
          leavesInRange: results
        };

        res.render('check-leave-request', options);
      });
    });
  },

  acceptLeaveRequest: function (req, res) {
    var objectId = req.params.id;

    Leave.update({
      _id: objectId
    },
      {
        approved: true,
        rejected: false
      }).exec(function (err, updated) {
      res.redirect('/');
    })
  },

  rejectLeaveRequest: function (req, res) {
    var objectId = req.params.id;

    Leave.update({
      _id: objectId
    },
      {
        approved: false,
        rejected: true
      }).exec(function (err, updated) {
        res.redirect('/');
    });
  }
};


function getCurrentMonth() {
  var calendarStart = getCalendarStart(new Date());
  // Show five weeks
  var calendarEnd = getCalendarEnd(new Date());
  var month = [];
  var week = [];
  while (calendarStart < calendarEnd) {
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

function getCalendarStart(day) {
  day.setHours(0, 0, 0, 0);
  var monthStart = new Date(day.valueOf()).addDays(-day.getDate());

  return new Date(monthStart.valueOf()).addDays(-monthStart.getDay());
}

function getCalendarEnd(day) {
  day.setHours(0, 0, 0, 0);
  var calendarStart = getCalendarStart(day);
  return new Date(calendarStart.valueOf()).addDays(35);
}

function getLeaveDateJson(leaves) {
  var jsonLeave = {};
  for (var i = 0; i < leaves.length; i++) {
    var start = leaves[i].startDate;
    var end = leaves[i].endDate;
    while (start <= end) {
      if (jsonLeave.hasOwnProperty(start)) {
        jsonLeave[start].push(leaves[i]);
      } else {
        jsonLeave[start] = [leaves[i]]
      }

      start = start.addDays(1);
    }
  }

  return jsonLeave;
}

Date.prototype.addDays = function (days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};
