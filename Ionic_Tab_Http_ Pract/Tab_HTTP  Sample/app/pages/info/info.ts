import {Page} from 'ionic-angular';
import {FIREBASE_PROVIDERS,AngularFire,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';

//Components
import {Add} from './../add/add';


@Page({
  templateUrl: 'build/pages/info/info.html',
})
export class Info {
  
  firebase_Superhero_Data:FirebaseListObservable<any[]>;  
  
  getData:FirebaseListObservable<any>;
    
  constructor(af:AngularFire) {
       this.firebase_Superhero_Data = af.list('/Superhero_Data');   
  }
  
  removeItem(id)
  {
      this.firebase_Superhero_Data.remove(id);
  }
   
  showData()
  {
      var af:AngularFire;
      
      var arrs = af.list('/Superhero_Data').toArray();
      console.log(arrs)
  } 
}
