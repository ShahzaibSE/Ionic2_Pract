import {Page,Alert,NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {Device} from 'ionic-native';
import {Geolocation} from 'ionic-native';

//Components.
import {Map} from './../map/map';

enum Days {'Day1','Day2'};

console.log(Days['Day1']);

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  ImageData; 
    
  constructor(public nav:NavController) {

             this.nav = nav;

  }
  
  gotoMap()
  {
      this. nav.push(Map);
  }
  
  getPicture()
  {
      /*let options= {
          destinationType : Camera['DestinationType'].DATA_URL,
      };*/
      
      /*Camera.getPicture(options).then((ImageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
         let base64Image = "data:image/jpeg;base64," + ImageData;
          }, (err) => {
         });*/
       
       /*let alert  = Alert.create({
           title:"Picture Captured",
           buttons : ['ok']
       })
       
       this.nav.present(alert); */ 
         
       console.log("Pictured Captured"); 
       
       let option = {
          //destinationType : Camera["DestinationType"].DATA_URL,
          destinationType : Camera["destinationType"].DATA_URL,
          allowEdit : false,
          targetWidth : 50
       }
       
       
       //var destinationType = Camera.DestinationType.FILE_URI;     
           
       Camera.getPicture(option).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        //"data:image/jpeg;base64," + 
        //let base64Image = imageData;
        let fileURI = imageData
        this.ImageData = fileURI;
        alert(fileURI);
    
    }, (err) => {
    });  
         
       /*console.log(Days[0]);  
       alert(Days[0]);*/
   }
   
   sentMessage()
   {
       let alert  = Alert.create(
           {
               title:"Do you want to send your message?",
               buttons : [
                   {
                       text:'Yes',
                       handler : ()=>
                       {
                           let alert1 = Alert.create({
                               title:"Message Sent"
                           })
                           
                           this.nav.present(alert1);
                       }
                   },
                   {
                       text:'No',
                       handler : ()=>
                       {
                           let alert1 = Alert.create({
                               title:"Exiting..."
                           })
                           
                           this.nav.present(alert1);
                       }
                   }
               ]
           }
       )
       
       this.nav.present(alert);
       
   }
  
   
   View_DeviceStatus()
   {
       //let status : Device;
       console.log(Device.device);
       
       let alert =  Alert.create(
           {
               title:"Device Information",
               subTitle : JSON.stringify(Device.device),
               buttons : ['Ok']
           }
       )
       
       this.nav.present(alert);
       
       /*let specifications = Alert.create(
           {
               title:status.model,
               buttons : ['Ok']
           }
       )
       
       this.nav.present(specifications);*/
   }
}
