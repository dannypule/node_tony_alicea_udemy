"use strict";

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

htmlController(app);
apiController(app);


app.listen(port);