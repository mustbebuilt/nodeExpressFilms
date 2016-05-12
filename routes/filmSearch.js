var express = require('express');
var router = express.Router();
var Movie = require('../models/Movie');
/* GET users listing. */
router.get('/', function(req, res, next) {

	var filmName = req.query.filmName;
    Movie.find({'filmName' : new RegExp(filmName, "i")}, function (err, docs) {
    	console.dir(docs);
        res.render('filmSearch', {
          "filmlist" : docs
        });
    });

});

module.exports = router;

