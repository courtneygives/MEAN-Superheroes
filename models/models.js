var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuperModel = new Schema ({
  alias: {type: String, required: true},
  first: {type: String, required: true},
  last: {type: String, required: true},
  city: {type: String, required: true},
  power: {type: String, required: true},

});

var Super = mongoose.model('Super', SuperModel);

module.exports = Super;
