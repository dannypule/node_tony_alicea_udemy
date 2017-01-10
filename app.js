"use strict";

// var moment = require('moment');
// console.log(moment().format('ddd, hA'));

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if(req.url === '/api'){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        var obj = {
            firstname: 'Jo',
            lastname: 'Blow'
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    } 
}).listen(1337, '127.0.0.1');