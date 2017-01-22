"use strict";

var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use(cookieParser());

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next){
    console.log('Cookies: ' + req.cookies);
    next();
});

app.get('/', function (req, res) {
    // res.send(`
        
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <link rel="stylesheet" href="assets/style.css">
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <p>hello world</p>
    //     </body>
    //     </html>

    // `);
    res.send(req.cookies);
});

app.get('/person/:page/:id', function (req, res) {
    res.send(`
        <h1>You asked for "${req.params.page}" and "${req.params.id}".</h1>
    `);
});

app.get('/api', function (req, res) {
    res.json({
        foo: 'bar'
    });
});


app.listen(port);