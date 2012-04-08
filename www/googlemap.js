function GoogleMap(){
    
    this.initialize = function(){

        try{
        var mapOptions = {
			     zoom: 4,
			     center: new google.maps.LatLng(-33, 151),
			     mapTypeId: google.maps.MapTypeId.ROADMAP
			 }
			 
        var map = new google.maps.Map(document.getElementById("mapArea"), mapOptions);
        }
        catch(error){
            alert(error.message);
        }
    
    }
}