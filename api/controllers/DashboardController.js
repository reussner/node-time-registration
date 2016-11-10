/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req, res){
		var options = {
			title: 'Dashboard'
		};

		res.render('homepage', options);
	}
};
