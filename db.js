var mongoose = require('mongoose');
//var db = monk('localhost:27017/nodeFilms');
var dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodeFilms';
mongoose.connect(dbURL, function(){

	console.log('Mongoose on');

})

module.exports = mongoose;