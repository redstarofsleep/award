var mysql = require('mysql');
var db = require('../utils/db');

exports.testSql = function(req, res) {
	db.query('select * from voteuser', [], function(rows) {
		console.log(rows[0].id + '  ' + rows[0].username);
	});
};


