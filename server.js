var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);


// Set the view directory to /views
app.set("views", __dirname + "/views");

// Let's use the Jade templating language
app.set("view engine", "jade");

app.get("/controller", function(request, response){
	response.render("controller");
});

app.get("*", function(request, response){
	response.render("index");
});

server.listen(8080);
console.log("Server running at http://localhost:8080/");
