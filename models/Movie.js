var db = require('../db.js');
//var mongoose = require('mongoose');
var movieSchema = db.Schema({
    filmName: String,
    filmCert: String,
    filmID: Number,
    filmDesc: String
});
var Movie = db.model('Movie', movieSchema);
module.exports = Movie;