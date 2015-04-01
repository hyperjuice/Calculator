// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

// Now instantiate our express app:
var app = express();

// Set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: true}));

// Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'))

//---------START THE ARITHMETIC FUNCTIONS---------
var resultArray = [];
app.get('/', function(req,res) { 
	res.render("index", {result: resultArray});

});	

//----ADDITION----TEST

app.post('/add', function(req, res) {
	var x = Number(req.body.x);
	var y = Number(req.body.y);
	var add = x + y;

	resultArray.push(add);
	res.redirect('/');

});

//----SUBTRACTION----

app.post('/subt', function(req, res) {
	var x = Number(req.body.x);
	var y = Number(req.body.y);
	var subt = x - y;

	resultArray.push(subt);
	res.redirect('/');

});

//----MULTIPLICATION----

app.post('/mult', function(req, res) {
	var x = Number(req.body.x);
	var y = Number(req.body.y);
	var mult = x * y;

	resultArray.push(mult);
	res.redirect('/');

});

//----DIVISION----

app.post('/div', function(req, res) {
	var x = Number(req.body.x);
	var y = Number(req.body.y);
	var div = x / y;

	resultArray.push(div);
	res.redirect('/');

});

//---------END THE ARITHMETIC FUNCTIONS---------

app.get('/', function(req, res) {
   res.render('index.ejs');
});


// Start the server on port 3000
app.listen(3000);