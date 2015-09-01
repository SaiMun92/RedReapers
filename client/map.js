var MAP_ZOOM = 15;


Template.map.helpers({  
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
    //Gets current location
    var latLng = Geolocation.latLng();
    if (!latLng){
      MAP_ZOOM=12;
      var lat = 1.388666;
      var lng = 103.7899;
    }
    else{
      var lat = latLng.lat;
      var lng = latLng.lng;
    }
    // Initialize the map once we have the latLng.
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: MAP_ZOOM
      };
    }
  }
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
    var latLng = Geolocation.latLng();
    //Temporary Fix, Geolocation fucking up. :(
    if (!latLng){
      MAP_ZOOM=12;
      var lat = 1.388666;
      var lng = 103.7899;
    }
    else{
      var lat = latLng.lat;
      var lng = latLng.lng;
    }
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map.instance
    });

   google.maps.event.addListener(map.instance, 'click', function(event) {
    var Marker = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    //Set marker to clicked location. 
    Session.set("CurMarker",Marker);
    //console.log(Marker);
    });

  });
});

Template.map.events({



});

