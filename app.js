const express 	 = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const	app     	 = express();
const api        = require('./server/routes/api');

// static files
console.info("[app] Setting static directory ");
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

// CORS
console.info("[app] CORS enabled ");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// Body parser
console.log("[app] Body parser ");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.get('/',  function(req, res) {
	res.sendFile(path.resolve('dist/index.html'));
});

app.get('/home',  function(req, res) {
	res.sendFile(path.resolve('dist/index.html'));
});

app.get('/clients',  function(req, res) {
	res.sendFile(path.resolve('dist/index.html'));
});

app.get('/inventory',  function(req, res) {
	res.sendFile(path.resolve('dist/index.html'));
});

app.get('/sales',  function(req, res) {
	res.sendFile(path.resolve('dist/index.html'));
});


// Routes API file for interacting with MongoDB
console.log("[app] Routes APIs ");
app.use(api);

// setting port
app.set('port', process.env.PORT || 4200);

var server = app.listen(app.get('port'), function() {
  console.log('[app] Express server listening on port ' + server.address().port);
});
