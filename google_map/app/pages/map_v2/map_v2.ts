import {Page} from 'ionic-angular';
import {} from 'googlemaps/directions';

@Page({
  templateUrl: 'build/pages/map/map.html'
})
export class Map_V2 {

public map; 

public marker_arr : any[] = []; 
  
constructor() {
  
    this.map = null;
    this.loadMap();
    
  }
 
loadMap(){
  var haightAshbury = {lat: 37.769, lng: -122.446};

  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: haightAshbury,
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    animation: google.maps.Animation.DROP,
  });

  // This event listener will call addMarker() when the map is clicked.
  this.map.addListener('click', function(event) {
    this.addMarker(event.latLng);
  }); 
  
  // Adds a marker at the center of the map.
  this.addMarker(haightAshbury);
 }
 
 //Adding Markers.
 addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: this.map
  });
  this.marker_arr.push(marker);
}

removeMarkers()
{
  setMapOnAll(null);
}

showMarkers()
{
  setMapOnAll(this.map);
}


// Deletes all markers in the array by removing references to them.
deleteMarkers() {
  this.removeMarkers();
  this.marker_arr = [];
}
 
}


