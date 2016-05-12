import {Page,NavController,ViewController,Loading} from 'ionic-angular';

//Import Models.
import {AdModels} from './../../models/ad_models';

//Import Regular_Expression Email.
import {email_regular_expression} from './../../models/login_model';

//Import Home Component.
import {Main} from './../main/main';

//Import Service.
import {Ad_Submission} from './../../services/adIn.service';

@Page({
  templateUrl: 'build/pages/cars/cars.html'
})

export class Car {
  
  Car_Ads:Array<AdModels>=[];
  
  categories : any[] = ["Laptop","Car","House"];
     
  constructor(public nav:NavController, public Ads:Ad_Submission , public viewController:ViewController) {
    
    this.viewController = viewController;
    
    //Getting Ads
    this.getads_and_filter();
    
    //Getting Car Ads.
    this.showCarAds();
  }
  
  gotoHome()
  {
    this.nav.push(Main);
  }
  
  getads_and_filter()
  {
     var Ad_Keys = this.Ads.getAds();
     //Checking localstorage_keys.
     for(let i=0;i<localStorage.length;i++)
     {
       console.log(`Ad Keys : ${Ad_Keys[i]}`);
     }
     
     //Getting Ads.
     for(let i=0;i<localStorage.length;i++)
     {
       if(!email_regular_expression.test(Ad_Keys[i]))
       {
          this.Car_Ads.push(JSON.parse(localStorage.getItem(Ad_Keys[i]))); 
       }
       else{
         console.log("Ad not Found");
       }
     }
     
     //Ads.
     for(let i=0;i<this.Car_Ads.length;i++)
     {
       /*if(this.Car_Ads[i].category == 'Car')
       {
       console.log("This is a car");
       }
       else{
         console.log("Not specified category");
       }*/
       if(this.Car_Ads[i].category == "Car"){
        console.log("Car Ad found"); 
       }
       else{
         this.Car_Ads.splice(i);
       }
     }
     
     console.log();
     //Car Ads.
     for(let i=0;i<this.Car_Ads.length;i++)
     {
       console.log("Car Ads");
       console.log(this.Car_Ads[i]);
     }
     
  }
  
  Loading()
  {
   let loading = Loading.create({
     content:"Please wait..",
     duration:2000
   }) 
   //Pushing Instance of the view.
   this.nav.present(loading);
  }
  
  showCarAds()
  {
    for(let i=0;i<this.Car_Ads.length;i++)
    {
      console.log("Car Ads");
      console.log(this.Car_Ads[i].title);
      console.log(this.Car_Ads[i].description);
      console.log(this.Car_Ads[i].category);
      console.log(this.Car_Ads[i].price);
      console.log();
    }
  }
  
}
