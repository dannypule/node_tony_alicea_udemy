"use strict";

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

app.use(cookieParser());

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
    // console.log('Cookies: ' + req.cookies);
    next();
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.render('person', {
        ID: req.params.id,
        Qstr: req.query.Qstr,
    });
});

app.post('/person', urlencodedParser, jsonParser, function (req, res) {
    res.send(req.body.firstname +' '+ req.body.lastname);
    // console.log(req.body.firstname);
    console.log(req.body);
});

app.get('/api', function (req, res) {
    res.json({
        foo: 'bar'
    });
});


app.listen(port);