import {Page,Alert,NavController} from 'ionic-angular';
import {Camera,Device} from 'ionic-native';

enum Days {'Day1','Day2'};

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  ImageData:any;  
    
  constructor(public nav:NavController) {

             this.nav = nav;

  }
  
  getPicture()
  {
      let options= {
          destination : Camera['DestinationType'].DATA_URL,
      };
      
      /*Camera.getPicture(options).then((ImageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
         let base64Image = "data:image/jpeg;base64," + ImageData;
          }, (err) => {
         });*/
       
       let alert  = Alert.create({
           title:"Picture Captured",
           buttons : ['ok']
       })
       
       this.nav.present(alert);  
         
       console.log("Pictured Captured"); 
      
      Camera.getPicture(options).then((ImageData) => 
      {
         let base64Image = ImageData;
         this.ImageData = base64Image;   
      },(err)=>
      {
          console.log(err);
      })  
         
       /*console.log(Days[0]);  
       alert(Days[0]);*/
   }
}
