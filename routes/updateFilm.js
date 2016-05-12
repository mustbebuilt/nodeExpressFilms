var express = require('express');
var router = express.Router();
var Movie = require('../models/Movie');

router.post('', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var updateID = req.body.id;
    var filmName = req.body.filmName;
    var filmCert = req.body.filmCert;

    Movie.update({ _id: updateID},
        {"filmName" : filmName,"filmCert" : filmCert}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("filmList");
        }
    })
});

module.exports = router;