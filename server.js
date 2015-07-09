var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	logger = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.static(__dirname + '/app'));

//require('./routes/routes.js')(app);

app.listen(8080, function(){
	console.log('Listening on port 8080');
});
