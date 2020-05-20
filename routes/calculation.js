var express = require('express');
var router = express.Router();
var Calculation = require('../models/Calculation.js');

// /* GET ALL CALCULATIONS */
router.get('/', function(req, res, next) {
  Calculation.find.toArray(function (err, items) {
    if (err) return next(err);
    console.log('data in server');
    res.json(items);
  });
});

// router.get('/'), function (req, res, next) {
//   Calculation.find()
//   .then(calculations => {
//     res.json(calculations);
//   }).catch(err => {
//     res.status(500).send({
//       msg: err.message
//     })
//   })
// }

// /* GET SINGLE CALCULATION BY ID */
// router.get('/:id', function(req, res, next) {
//   Calculation.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* SAVE CALCULATION */
// router.post('/', function(req, res, next) {
//   Calculation.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* UPDATE CALCULATION */
// router.put('/:id', function(req, res, next) {
//   Calculation.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE CALCULATION */
// router.delete('/:id', function(req, res, next) {
//   Calculation.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
