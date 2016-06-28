import {Page} from 'ionic-angular';
import {GoogleMaps,Geolocation,Splashscreen} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/main/main.html',
})
export class Main {
  constructor(public googlemaps:GoogleMaps) {
      
  }
}
