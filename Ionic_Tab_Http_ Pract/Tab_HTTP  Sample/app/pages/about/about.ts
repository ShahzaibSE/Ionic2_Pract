import {Page} from 'ionic-angular';
import {FIREBASE_PROVIDERS,AngularFire,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {Device} from 'ionic-native';   //Using cordova device plugin.

//Components
import {Add} from './../add/add';


@Page({
  templateUrl: 'build/pages/about/about.html',
})

export class About {
  
  firebase_Superhero_Data:FirebaseListObservable<any[]>;  
  
  //getData:FirebaseListObservable<any>;
    
  constructor(af:AngularFire) {
       this.firebase_Superhero_Data = af.list('/Superhero_Data');   
  }
  
  /*removeItem(id)
  {
      this.firebase_Superhero_Data.remove(id);
  }*/
     
  showDeviceInfo()
  {
      //var device:Device;
      //console.log(this.firebase_Superhero_Data);
      //console.log(device.model);
      alert("Know about our App");
  } 
}
