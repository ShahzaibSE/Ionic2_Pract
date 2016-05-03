import {Page} from 'ionic-angular';
import {Camera,Splashscreen} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  
  ImageData;
  
  constructor() {

  }
  
  takePicture()
  {
    Splashscreen.show();
    Splashscreen.hide();
    //debugger;
    let options = {
      destinationType : 1,
      allowEdit : false
    }
    
    Camera.getPicture(options).then((imageData)=>
    {
      let base64Image = "data:image/jpeg;base64," + imageData;
      this.ImageData = base64Image;
    })
  }
}
