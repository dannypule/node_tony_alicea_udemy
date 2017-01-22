"use strict";

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send(`
        <h1>hello world</h1>
    `);
});

app.get('/person/:page/:id', function(req, res){
    res.send(`
        <h1>You asked for "${req.params.page}" and "${req.params.id}".</h1>
    `);
});

app.get('/api', function(req, res){
    res.json({
        foo: 'bar'
    });
});


app.listen(port);