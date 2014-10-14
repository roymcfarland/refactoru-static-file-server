var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	fs.readFile('./data.txt', function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

var server = app.listen(4914, function() {
	console.log('Express server listening on port ' + server.address().port);
});