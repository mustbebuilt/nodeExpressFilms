var express = require('express');
var router = express.Router();
var Movie = require('../models/Movie');
/* GET users listing. */
router.get('/:filmID?', function(req, res, next) {

	var filmID = parseInt(req.params.filmID);
    Movie.findOne({'filmID' : filmID}, function (err, docs) {
        res.render('filmDetails', {
          "filmlist" : docs
        });
    });

});

module.exports = router;

