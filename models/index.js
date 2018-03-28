//This is connecting to the database

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app"); 

// this requires the book.js file. like exporting. 

var BookModel = require('./book.js');

module.exports = {

	Book: BookModel,

}

