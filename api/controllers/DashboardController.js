/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Q = require('q');

module.exports = {
  get: function (req, res) {
    var month = getCurrentMonth();
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var previousMonth = today.getMonth() - 1;

    Q.all([
        Leave.find({
          where: {
            approved: true,
            startDate: {
              '>=': getCalendarStart(new Date())
            }
          },
          sort: 'startDate ASC'
        }),
        Employee.find({
          where: {
            "Resource No_": {
              '!': ''
            }
          }
        })
      ]
    ).spread(function (leaves, employees) {

      var options = {
        title: 'Dashboard',
        calendar: month,
        currentDate: today,
        previousMonth: previousMonth,
        calendarEvents: getLeaveByDate(leaves),
        matrixEvents: getLeaveByOwner(leaves),
        employees: employees
      };

      res.render('homepage', options);
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
  return new Date(day.valueOf()).addDays(-day.getDay());
}

function getCalendarEnd(day) {
  day.setHours(0, 0, 0, 0);
  var calendarStart = getCalendarStart(day);
  return new Date(calendarStart.valueOf()).addDays(28);
}

function getLeaveByOwner(leaves) {
  var ownerJson = {};

  for (var i = 1; i < leaves.length; i++) {
    var jsonLeave = {};
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

    var owner = leaves[i].owner;
    if (ownerJson.hasOwnProperty(owner)) {
      ownerJson[owner].push(jsonLeave);
    } else {
      ownerJson[owner] = jsonLeave;
    }
  }

  return ownerJson;
}

function getLeaveByDate(leaves) {
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
