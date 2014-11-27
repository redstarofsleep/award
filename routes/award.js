var app = require('../app');
var prepare = require('../utils/prepare');

exports.startAward = function(req, res) {
	app.sendws('one client start');
	res.send('OK');
};

exports.getPhones = function(req, res) {
	res.send(prepare.getPhones());
};

exports.getLucks = function(req, res) {
	res.send(prepare.getAwards());
};

exports.retry = function(req, res) {
	var renum = prepare.retry();
	console.log('retry==>' + renum);
	res.send(renum);
}