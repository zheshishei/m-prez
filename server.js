var express = require('express');
var http = require('http');
var socketio = require('socket.io');
var path = require('path');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Set the view directory to /views
app.set("views", __dirname + "/views");

// Set the template engine to Jade
app.set("view engine", "jade");

//set the base directory to public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get("/controller", function(request, response){
	response.render("controller");
});

app.get("*", function(request, response){
	response.render("index", {layout:false});
});

server.listen(8080);
console.log("Server running at http://localhost:8080/.\nPress Ctrl+C"+
						" to shut down the server");

process.on( 'SIGINT', function() {
  console.log( "\nDetected SIGINT (Ctrl-C). Shutting down the server." );
  // some other closing procedures go here
  process.exit( );
	console.log("Server has been shut down.");
});
