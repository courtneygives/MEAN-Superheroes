
// :::::::::::: CONFIGURATION :::::::::::: //

var express = require('express');
var path = require('path');
var router = express.Router();
var Super = require('../../models/models.js');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
  console.log('index .get "/" is working');
});


// :::::::::::: ALL :::::::::::: //

router.get('/all', function(request, response){
  Super.find({}, function(err, payload){
    if (err){
      console.log('Error getting heroes: ' + err);
    } else {
      console.log('Getting all heroes');
      response.send(payload);
    }
  });
});

// :::::::::::: ADD :::::::::::: //

router.post('/add', function(request, response){
  var data = request.body;
  var hero = new Super ({
    alias: data.alias,
    first: data.first,
    last: data.last,
    city: data.city,
    power: data.power
  });
  console.log('Adding' + data.hero_alias);

  hero.save(function(err){
    if (err){
      console.log('Error saving hero: ' + err);
      response.sendStatus(418); //"I'm a teapot"
    }
  });
});

// :::::::::::: REMOVE :::::::::::: //

// :::::::::::: EDIT :::::::::::: //



module.exports = router;
