var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require("path");

app.use(bodyParser());

app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
   res.sendFile(path.resolve('./client/index.html')); 
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App is now running on port 3000");
});

/*
var http = require('http');

http.createServer(function(request, response) {
    request.on('end', function(){
     
    });
    
    response.writeHead(200);
    response.end('Hello Jack!');
    
}).listen(3000);
*/