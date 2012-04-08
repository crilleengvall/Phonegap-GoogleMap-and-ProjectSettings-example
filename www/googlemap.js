function GoogleMap(){
    
    this.initialize = function(){
        var map = showMap();
        addMarkersToMap(map);
    }    
    
    var addMarkersToMap = function(map){
        var mapBounds = new google.maps.LatLngBounds();
    
        var latitudeAndLongitudeOne = new google.maps.LatLng('-33.890542','151.274856');

        var markerOne = new google.maps.Marker({
					position: latitudeAndLongitudeOne,
					map: map
				});
				
        var latitudeAndLongitudeTwo = new google.maps.LatLng('57.77828', '14.17200');

        var markerOne = new google.maps.Marker({
					position: latitudeAndLongitudeTwo,
					map: map
				});
				
        mapBounds.extend(latitudeAndLongitudeOne);
        mapBounds.extend(latitudeAndLongitudeTwo);
        
        map.fitBounds(mapBounds);
    }
    
    
    
    var showMap = function(){
        var mapOptions = {
			     zoom: 4,
			     center: new google.maps.LatLng(-33, 151),
			     mapTypeId: google.maps.MapTypeId.ROADMAP
			 }
			 
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
        
        return map;
    }
}