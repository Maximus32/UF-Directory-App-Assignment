'use strict';

// Imported modules/files
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

// Connect to database
mongoose.connect(config.db.uri) ;

// Call 'readFile' method, parse data, and add to the database
fs.readFile('listings.json', 'utf8', function(err, raw_data) {
	var index, listing ;
	var listings = JSON.parse(raw_data).entries ;
	
	// Import all listings parsed from the file into the Database
	for (index in listings) {
		listing = listings[index] ;
		
		// Create new document
		var newListing = Listing({
			code: listing.code,
			name: listing.name,
			coordinates: listing.coordinates,
			address: listing.address
		}) ;
		
		// Save to database
		newListing.save(function(err) {
			if (err) throw err;

			console.log('Listing saved!') ;
		});
	}
});