import {Page,ActionSheet,Alert,NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/map/map.html'
})
export class Map {

public map; 

public markers : any[] = []; 
  
constructor(public nav:NavController) {
    this.map = null;
    this.loadMap();
    
    //this.Markers();
  }
 
loadMap(){
 
  let options = {timeout: 10000, enableHighAccuracy: true};
 
  navigator.geolocation.getCurrentPosition(
 
      (position) => {
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
          let mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }
 
          this.map = new google.maps.Map(document.getElementById("map"), mapOptions);   //Creates a new map of the given html container.
      },
 
      (error) => {
          console.log(error);
      }, options
 
  );
 }
 


//Adding Markers to the map.
addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h4>Information!</h4>";         
  
  //Pushing Markers.
  this.markers.push(marker); 
 
  this.addInfoWindow(marker, content);
 
}

 //Information Window , when markers are clicked.
 addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', function(){
    infoWindow.open(this.map, marker);
  }); 
 }
 
 Markers()
 {
   console.log("Markers");
   for(let i=0;i<this.markers.length;i++){
     console.log(this.markers[i]);
   }
 }
 
 Options()
 {
   let options = ActionSheet.create({
     title:"Options",
     buttons:[{
       text:"+Add Marker",
       handler:()=>{
         this.addMarker();
       }
     },
     
     {
       text:"Clear Markers",
       handler:()=>{
         this.removeMarkers();
       }
     },
     
     {
       text:"Cancel",
       role:"cancel",
       handler:()=>{
         let cancel_message = Alert.create({
           title:"Canceled...",
         })
         this.nav.present(cancel_message);
       }
     }]
   })
   
   this.nav.present(options);
   
 }
 
 setMapOnAll(map)
 {
  for(let i=0;i<this.markers.length;i++)
  {
    this.markers[i].setMap(map)
  } 
 }
 
 removeMarkers()
 {
   this.setMapOnAll(null);
 }

}
