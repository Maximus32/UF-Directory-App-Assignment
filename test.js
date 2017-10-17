var should = require('should'), 
    mongoose = require('mongoose'), 
    Listing = require('./ListingSchema');

var db_link = "mongodb://student:classcen3031@ds045465.mlab.com:45465/class";

mongoose.connect(db_link);
var extra_credit_object = {
    "name": "Max Dunevitz", 
    "code": "Hello, World!"
}

new Listing(extra_credit_object).save(function(err, new_listing){
    if (err) throw err;
    console.log("All done!");
}) ;
