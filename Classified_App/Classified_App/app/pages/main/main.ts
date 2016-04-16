import {Page,NavController,ActionSheet,Modal,Loading} from 'ionic-angular';

//Import Component.
import {Account} from './../account/account';
import {Bike} from './../bikes/bikes';
import {Car} from './../cars/cars';
import {Laptop} from './../laptops/laptops';
import {Page1} from './../page1/page1';

@Page({
  templateUrl: 'build/pages/main/main.html'
})

export class Main {
  
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
    
  constructor(public nav:NavController) {
      
      this.nav = nav;
      
      //Loading Indicating Function.
      //this.AppStarting();

  }
  
  Show_More_Catagories()
  {
      //this.show =  this.catagories ? false:true;
       
      let More_Catagories = ActionSheet.create({
          title:"More Catagories",
          buttons:[
              {
                  text:"Cars",
                  handler:()=>{
                      //console.log("Car Catagory");
                      //this.nav.push(Page1);
                      this.AppStarting();
                      let cars = Modal.create(Car);
                      this.nav.present(cars);
                  }
              },
              {
                  text:"Laptops",
                  handler:()=>{
                      //console.log("Laptop Catagory");
                      //this.nav.push(Laptop);
                      this.AppStarting();
                      let laptops = Modal.create(Laptop);
                      this.nav.present(laptops);
                  }
              },
              {
                  text:"Bikes",
                  handler:()=>{
                      //console.log("Bike Catagory");
                      //this.nav.push(Bike);
                      this.AppStarting();
                      let bikes = Modal.create(Bike);
                      this.nav.present(bikes);
                  }
              }
          ]
      })
      
      this.nav.present(More_Catagories);
  }
  
  //Navigation Handlers.
  Register()
  {
      console.log("Add new user");
      this.nav.push(Account);
  }
  
  AppStarting()
  {
      let loadApp = Loading.create(
          {
              content : "Loading...",
              duration : 5000,
              delay : 2000,
          }
      );
      
      this.nav.present(loadApp);
  }
  
}
