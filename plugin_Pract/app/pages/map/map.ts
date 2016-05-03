import {Page,Alert,NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {Device} from 'ionic-native';
import {Geolocation} from 'ionic-native';


enum Days {'Day1','Day2'};

console.log(Days['Day1']);

@Page({
  templateUrl: 'build/pages/map/map.html'
})
export class Map {
  
  map;
  
  navigator_location;
 
  constructor(public nav:NavController) {

             this.nav = nav;
             this.map = null;
             
             //Calling the Function.
             //this.loadMap();

  }
  
  getMap()
  {
      Geolocation.getCurrentPosition().then((res)=>
      {
          console.log(res);
          console.log(`Latitude : ${res.coords.latitude}`)
          console.log(`Longitude : ${res.coords.longitude}`);
      })
      
         
  }
  
  loadMap()  
  {
      let options = {timeout: 10000, enableHighAccuracy: true};
      
      Geolocation.getCurrentPosition().then((res)=>
      {
          console.log(`Latitude : ${res.coords.latitude}`);
          console.log(`Longitude : ${res.coords.longitude}`);
      })
      
      /*Geolocation.getCurrentPosition()
      {
      (position) => {
          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
          let mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          }
 
          this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      },
 
      (error) => {
          console.log(error);
      }, options
    }
         
      //this.map = new google.maps.Map(document.getElementById("map"), mapOptions);*/ 
  }
  
  test_Navigator()
  {
      this.navigator_location =  navigator.geolocation;
      console.log(this.navigator_location);
  }
  
}