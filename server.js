var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

// Common notation for express middlewear. 
app.use(function(req, res, next){
	if (req.protocol === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next()
	}
})

app.use(express.static('public'));

app.listen(PORT, function (){
	console.log('Express server on PORT ' + PORT);
})

