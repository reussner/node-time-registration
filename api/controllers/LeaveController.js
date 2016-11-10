/**
 * LeaveController
 *
 * @description :: Server-side logic for managing Leaves
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	page: function (req, res) {
    var options = {
      title: 'Apply for leave'
    };

    res.render('apply-for-leave', options);
  }
};

