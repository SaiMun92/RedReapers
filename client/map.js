var MAP_ZOOM = 15;



Template.map.helpers({  
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
    
    var latLng = Geolocation.latLng();  //Gets current location
    if (!latLng){
      //If geolocation API is not working, defaults to 'center' of Singapore
      //Displays a further away view in this case
      MAP_ZOOM=12;
      var lat = 1.388666;
      var lng = 103.7899;
    }
    else{
      //Map generates at current location of user 
      MAP_ZOOM = 13;
      var lat = latLng.lat;
      var lng = latLng.lng;
    }
    Session.set("CurMarker",{lat:lat,lng:lng});
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
    panorama = GoogleMaps.maps.map.instance.getStreetView();
    //Add markers to all incidents
     Meteor.autorun(function() {
            
               console.log("Generating markers for incidents");
                var incidents = Incidents.find().fetch();

                _.each(incidents, function(incident) {
                    var lat = incident.location.lat;
                    var lng = incident.location.lng;
                    console.log(lat + "," + lng);

                    if(lat && lng){
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                        clickable:true,
                        animation: google.maps.Animation.DROP,
                        title:incident.type,
                        map: GoogleMaps.maps.map.instance
                    });
                        marker.addListener('click',function(){
                          console.log("Marker clicked");
                          console.log(incident.type);
                          //Zooms into marker location! 
                          var loc = new google.maps.LatLng(lat, lng)
                          map.instance.setZoom(15);
                          map.instance.setCenter(loc);
                          /*
                          // Street View FEATURE NOT IN USE YET
                          panorama = map.instance.getStreetView();
                          map.instance.setStreetView(panorama);
                          if (Session.get("panorama")==false){
                                panorama.setPosition(loc);
                                panorama.setPov(({
                                  heading: 265,
                                  pitch: 0
                                  }));
                                panorama.setVisible(true);
                                console.log("Panorama activated");
                          }*/
                          
                          //Set Single Incident View to target incident
                          Session.set("SingleIncidentView",incident._id);
                          Session.set("incidentview",false); //Close multi-incident view

                        });
                       
                       }
                    
                });
           



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

