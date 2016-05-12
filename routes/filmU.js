var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var db = req.db;
    var collection = db.get('movies');
    //var options = {"sort": "filmName"};
    collection.find({'filmCert': 'U'}, {"sort" : "filmName"}, function(e,docs){
       res.render('filmList', {
           "filmlist" : docs
        });
   });
});

module.exports = router;