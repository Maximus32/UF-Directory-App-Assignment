
// Imported modules/files
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

// Connect to database
mongoose.connect(config.db.uri) ;

// Finds and prints the listing pertaining to Library West
var findLibraryWest = function() {
	Listing.find( { code: 'LBW' }, function(err, listings) {
		if (err) throw err ;
		
		console.log(listings[0]) ;
	}) ;
} ;

// Deletes listings pertaining to cable TV
var removeCable = function() {
	Listing.find( { code: 'CABL' }, function(err, listings) {
		if (err) throw err ;
		
		listings[0].remove(function(err) {
			if (err) throw err ;
			
			console.log(listings[0]) ;
			console.log('The above document was successfully removed') ;
		}) ;
	}) ;
};

// Finds the listing pertaining to the Phelps Laboratory and updates its address
var updatePhelpsMemorial = function() {
	Listing.find( { code: 'PHL' }, function(err, listings) {
		if (err) throw err ;
		
		listings[0].address = '1953 MUSEUM RD, GAINESVILLE, FL 32611' ;
		
		console.log('The following document\'s address has been updated') ;
		console.log(listings[0]) ;
	}) ;
};

// Fetches all listings
var retrieveAllListings = function() {
	Listing.find( {}, function(err, listings) {
		if (err) throw err ;
		
		console.log(listings) ;
	}) ;
};