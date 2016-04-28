
// :::::::::::: CONFIGURATION :::::::::::: //

var express = require('express');
var path = require('path');
// var model = require('');
var router = express.Router();

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
  console.log('index .get "/" is working');
});


// :::::::::::: ALL :::::::::::: //

// :::::::::::: ADD :::::::::::: //

// :::::::::::: REMOVE :::::::::::: //

// :::::::::::: EDIT :::::::::::: //



module.exports = router;
