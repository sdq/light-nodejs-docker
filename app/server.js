var http = require('http'),
express = require('express'),
path = require('path')

var app = express();

app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.status(200).send("<html><body><p>light nodejs docker</p></body></html>");
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Server listening on port ' + app.get('port'));
});