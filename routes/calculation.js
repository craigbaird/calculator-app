var express = require('express');
var router = express.Router();
// var CalculationSchema = require('../models/Calculation.js');
var mongoose = require('mongoose');

var CalculationsSchema = mongoose.Schema({
  'username': String,
  'calculation': String
});

var Calculations = mongoose.model('Calculations', CalculationsSchema);

// /* GET ALL CALCULATIONS */
router.get('/', function(req, res, next) {
  console.log('in node');
  Calculations.find(), function (err, items) {
    console.log('got stuff from mongo', items);
    if (err) {
      console.log(err);
      res.sendStatus(500);
      console.log(err);
      // return next(err);
    }
    // if (err) return next(err);
    res.json(items);
  };
});

router.post('/', function(req, res, next) {
  console.log('in node');
  Calculations.find(), function (err, post) {
    if (err) return next(err);
    res.json(post);
  };
});

// router.get('/'), function (req, res, next) {
//   console.log('in node');
//   Calculation.find()
//   .then(calculations => {
//     res.json(calculations);
//   }).catch(err => {
//     res.status(500).send({
//       msg: err.message
//     })
//   })
// }

// /* SAVE CALCULATION */
router.post('/', function(req, res, next) {
  let calculationToSave = {
    username: req.body.username,
    calculation: req.body.calculation,
  }
  Calculation.create(calculationToSave, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
