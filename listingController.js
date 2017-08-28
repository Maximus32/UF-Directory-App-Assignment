angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings ;
    $scope.detailedInfo = undefined ;
	
	// Placeholder for new listing
	$scope.templ = {
		code: '',
		name: '',
		coordinates: {
			latitude: 0, 
			longitude: 0
		},
		address: ''
	} ;
	
	// Adds a clone of the template listing to the listings
    $scope.addListing = function() {
		$scope.listings.push({
			code: $scope.templ.code,
			name: $scope.templ.name,
			coordinates: {
				latitude: $scope.templ.coordinates.latitude,
				longitude: $scope.templ.coordinates.longitude,
			},
			address: $scope.templ.address
		}) ;
	} ;
	
	// Deletes the listing at the specified index and resets the detailed info view
    $scope.deleteListing = function(index) {
		if (confirm("Really delete this listing?")) {
			$scope.listings.splice(index, 1) ;
			
			$scope.detailedInfo = undefined ;
		}
	} ;
    
	// Configures the detailed info view for the listing at the specified index
	$scope.showDetails = function(index) {
		$scope.detailedInfo = $scope.listings[index] ;
	} ;
	
	$scope.onSearchBarModify = function() {
		
	} ;
  }
]);