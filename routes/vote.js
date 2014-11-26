var db = require('../utils/db');

exports.voteList = function(req, res) {
	db.query('select * from vote', [], function(rows) {
		res.send(rows);
	});
};