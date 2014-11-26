var express = require('express');
var WebSocket = require('faye-websocket');
var http = require('http');

var award = require('./routes/award');

var app = express();
var server = require('http').createServer(app);
server.listen(8080);

var appRootPath = '/award';
exports.getRootPath = appRootPath;

app.use(express.bodyParser());
app.use(appRootPath + '/public', express.static('public'));

var prepare = require('./utils/prepare');
console.log('========s=t=a=r=t====================');
var awards = prepare.start();
for (var i = 0; i < awards.length; i++) {
	console.log(i + ':' + awards[i]);
}
console.log('========e=n=d=====================');

/**
 * WebSocket监听启动
 */
var ws = null;
server.on('upgrade', function(req, socket, body) {
	if (WebSocket.isWebSocket(req)) {
		ws = new WebSocket(req, socket, body);

		ws.on('close', function(event) {
			console.log('web socket close');
			ws = null;
		});
	}
});
exports.sendws = function(msg) {
	if (ws != null) {
		ws.send(msg);
	}
};

/**
 * 全局过滤器
 */
app.all(appRootPath + '/*', function(req, res, next) {
	console.log('*******' + req.path);
	req.setEncoding('utf8');
	next();
});

app.get('/award/start', award.startAward);
