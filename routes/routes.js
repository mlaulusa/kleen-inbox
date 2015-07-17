module.exports = function(app, mongoose){
	app.get('/', function(req, res){
		res.sendFile('./index.html');
	});
};
