// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var cards = [1,2,3,4,5,6,7,8];
    res.render('pages/index', {
        cards: cards
    })
});

// individual card page 
app.get('/card', function(req, res) {
    var currentCard = req.query.currentCard;
    res.render('pages/card', {
        currentCard: currentCard
    });
});

app.listen(8080);
console.log('server up at port 8080');