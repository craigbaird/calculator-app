var mongoose = require('mongoose');

var CalculationSchema = mongoose.Schema({
    'calculation': String,
    'timestamp': String,
    'userid': String
  });

module.exports = mongoose.model('Calculation', CalculationSchema);