var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var cookieParser = require('cookie-parser');
app.use(cookieParser());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Set EJS View Engine**
app.set('view engine', 'ejs');
// Set HTML engine**
app.engine('html', require('ejs').renderFile);
//set directory
app.set('views', __dirname + '/views');
//static folder
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('index.html');
});


app.get('/search', urlencodedParser, function (req, res) {
    //retrieve first and lastname
    var searchText = req.query.searchText;
    //open submitted.html after the user has submitted the form
    res.cookie('searchText', searchText, { sameSite: 'none', secure: true }).render('mashup.html', { output: searchText });
});

app.post('/', urlencodedParser, function (req, res) {
    //retrieve first and lastname
    var searchText = req.body.searchText;
    //open submitted.html after the user has submitted the form
    res.cookie('searchText', searchText, { sameSite: 'none', secure: true }).render('mashup.html', { output: searchText });
});




app.listen(3000);