var http	= require('http'), 
	fs		= require('fs'), 
	url		= require('url'),
	port	= 8080 ;

// Global variables
var listingData ;

// Create an HTTP requst handler to later be passed to a server
var requestHandler = function(request, response) {
	
	// Create URL object from raw string obtained from request
	var parsedUrl = url.parse(request.url) ;
	
	// If a "GET" HTTP request at the "/listings" resource path, write out the 'listingData' variable
	// Else respond with a 404 error
	if (request.method === 'GET' && parsedUrl.pathname === '/listings') {
		response.write(listingData) ;
	} else {
		response.writeHead(404, { 'Content-Type' : 'text/plain' }) ;
		response.write('Bad gateway error') ;
	}
	
	// Close the response
	response.end() ;
};

// Call 'readFile' method and call back an anonymous function to create a server with the
// previously specified request handler
fs.readFile('listings.json', 'utf8', function(err, data) {
	
	// Store data within "listings.json" into a global variable
	listingData = data ;
	
	// Create server and listen at port '8080'
	http.createServer(requestHandler).listen(port) ;
	
	console.log('server listening on: http://localhost:8080') ;
});


