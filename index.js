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

//load index.html
app.get('/', function (req, res) {
    res.render('index.html');
});

//load mashup.html on uni selection
app.get('/search', urlencodedParser, function (req, res) {
    //retrieve searched university
    var searchText = req.query.searchText;
        //setting up cookie beore rendering
        res.cookie('searchText', searchText, { sameSite: 'none', secure: true }).render('mashup.html', { output: searchText });
});


app.listen(3000);