/**
 * TimeRegistrationController
 *
 * @description :: Server-side logic for managing Timeregistrations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  get: function (req, res) {
    var entries = [];
    TimeRegEntry.find({
      owner: 'AR'
    }).exec(function (err, entriesForOwner) {
      entries = entriesForOwner;

      var options = {
        title: 'Time Registration',
        timeRegEntries: entries
      };
      res.render('time-registry', options);
    });
  },

  addEntry: function (req, res) {
    var flat = false,
      ticket = false,
      review = false,
      chargeable = false;

    if (req.body.flat)
      flat = true;
    if (req.body.ticket)
      ticket = true;
    if (req.body.review)
      review = true;
    if (req.body.chargeable)
      chargeable = true;


    var values = {
      owner: "AR",
      project: req.body.project,
      task: req.body.task,
      subproject: req.body.subproject,
      comment: req.body.comment,
      time: req.body.time,
      unit: req.body.unit,
      flat: flat,
      ticket: ticket,
      review: review,
      chargeable: chargeable,
      chargeableTime: req.body.chargeableTime
    };

    TimeRegEntry.create(values).exec(function (err, records) {

    });

    res.redirect('back');
  }
};
