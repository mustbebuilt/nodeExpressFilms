var express = require('express');
var router = express.Router();
var Movie = require('../models/Movie');
/* GET users listing. */
router.get('/', function(req, res, next) {
    //Movie.find({}, 'filmName', function (err, docs) {
   	Movie.find({}, function (err, docs) {
    	//var returnJSON = JSON.stringify(docs);
    	//console.dir(returnJSON);
        res.render('filmList', {
          "filmlist" : docs
        });
    });
});

module.exports = router;