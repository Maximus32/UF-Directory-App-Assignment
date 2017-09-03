/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Define schema for Listing document */
var listingSchema = new Schema({
	code: { type: String,  required: true, unique: true },
	name: { type: String,  required: true }, 
	coordinates: {
		latitude: Number,
		longitude: Number,
	}, 
	address: String,
	
	created_at: Date,
	updated_at: Date
});

/* 'Pre' method that sets the 'updated_at' field (and 'created_at' field if not already there) */
listingSchema.pre('save', function(next) {
	var currentDate = new Date();
	
	// change the 'updated_at' field to current date
	this.updated_at = currentDate;
	
	// if 'created_at' doesn't exist, add to that field
	if (!this.created_at)
		this.created_at = currentDate;
	
	next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
