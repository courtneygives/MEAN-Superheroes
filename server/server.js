
// :::::::::::: CONFIGURATION :::::::::::: //

var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/routes.js');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static('server/public'));


// :::::::::::: ROUTES :::::::::::: //
app.use('/', index);


// :::::::::::: DATABASE :::::::::::: //

var mongoURI = 'mongodb://localhost/mean-superheroes';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error: ', err);
});

MongoDB.once('open', function(){
  console.log('MongoDB connection open!');
});


// :::::::::::: SERVER :::::::::::: //

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
});
