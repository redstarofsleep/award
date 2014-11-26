var app = require('../app');

exports.startAward = function(req, res) {
	app.sendws('one client start');
	res.send('OK');
};