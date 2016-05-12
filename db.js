var mongoose = require('mongoose');
//var db = monk('localhost:27017/nodeFilms');
var dbURL = 'mongodb://heroku_q3x5d4vq:8od4fmkbd3j2j12rajb2ubsktv@ds021182.mlab.com:21182/heroku_q3x5d4vq' || 'mongodb://localhost:27017/nodeFilms';
mongoose.connect(dbURL, function(){

	console.log('Mongoose on');

})

module.exports = mongoose;