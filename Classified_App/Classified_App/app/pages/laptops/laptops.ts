import {Page,NavController,ViewController} from 'ionic-angular';


//Import Models.
import {AdModels} from './../../models/ad_models';

//Import Regular_Expression Email.
import {email_regular_expression} from './../../models/login_model';

//Import Service.
import {Ad_Submission} from './../../services/adIn.service';

//Import Home Component.
import {Main} from './../main/main';



@Page({
  templateUrl: 'build/pages/laptops/laptops.html'
})

export class Laptop {
  
   laptop_ads:Array<AdModels> = [];
   
   categories : any[] = ["Laptop","Car","House"];
     
   constructor(public nav:NavController , public viewController:ViewController,public Ads:Ad_Submission) {
    
    this.viewController = viewController;
    
    /*this.getads_laptops();
    
    this.filter_laptop_Ads();*/
    this.getads_and_filter();

  }
  
  gotoHome()
  {
    this.nav.push(Main);
  }
  
  getads_laptops()
  {
    var Ad_keys = this.Ads.getAds();
    
    console.log("Ad Keys");
    for(let i=0;i<Ad_keys.length;i++)
    {
      console.log(Ad_keys[i]);
    }
    
    //Getting All Ads.
    for(let i=0;i<Ad_keys.length;i++)
    {
      if(!email_regular_expression.test(Ad_keys[i]))
      {
      //this.laptop_ads.push(JSON.parse(localStorage.getItem(Ad_keys[i])));
      this.laptop_ads.push(JSON.parse(localStorage.getItem(Ad_keys[i])));
      }
      else{
        console.log("Not valid Ad");
      }
    }
    
    //Logging all Ads.
    for(let i=0;i<this.laptop_ads.length;i++)
    {
      console.log(this.laptop_ads[i]);
    }
    
     //Filtering Laptop Ads.
    for(let i=0;i<this.laptop_ads.length;i++)
    {
      if(this.laptop_ads[i].category == "Laptop"){
         console.log("Laptop Ad Found");       
      }else{
        this.laptop_ads.splice(i);
      }
    }
    
    
    //Filtering Laptop Ads.
    /*for(let i=0;i<this.laptop_ads.length;i++)
    {
      if(this.laptop_ads[i].category == "Laptop"){
         console.log("Laptop Ad Found");       
      }else{
        this.laptop_ads.splice(i);
      }
    }*/
    //Logging All Ads.
    /*for(let i=0;i<this.laptop_ads.length;i++)
    {
      console.log("All Ads:");
      console.log(`Title : ${this.laptop_ads[i].title}`);
      console.log(`Descritption : ${this.laptop_ads[i].description}`);
      console.log(`All Ads : ${this.laptop_ads[i].category}`);
      console.log(`All Ads : ${this.laptop_ads[i].price}`);
    }
    
    //console.log(JSON.stringify(this));
    
    //Filtering Laptop Ads.
    for(let i=0;i<this.laptop_ads.length;i++)
    {
      //if(this.laptop_ads[i].category == this.toString())
      if(this.laptop_ads[i].category == "Laptop")
      {
        console.log("Laptop Ad found");
      }
      else{
        this.laptop_ads.splice(i);
      }
    }
    
    //console.log("Laptop Ads are found");
    
    //Loggin Laptop Ads.
    for(let i=0;i<this.laptop_ads.length;i++)
    {
      console.log("Laptop Ads");
      console.log(`${this.laptop_ads[i]}`);
    }*/
    
    //console.log(this.constructor.toString());
    //console.log(this);
  }
  
  filter_laptop_Ads()
  {
     //Filtering Laptop Ads.
    for(let i=0;i<this.laptop_ads.length;i++)
    {
     console.log("Laptop Ad");
     console.log(`Title : ${this.laptop_ads[i].title}`);
     console.log(`Description : ${this.laptop_ads[i].description}`);
     console.log(`Category : ${this.laptop_ads[i].category}`);
     console.log(`Price : ${this.laptop_ads[i].price}`);
    }
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
       if(email_regular_expression.test(Ad_Keys[i]))
       {
          console.log("Not an Ad");
       }
       else{
          this.laptop_ads.push(JSON.parse(localStorage.getItem(Ad_Keys[i]))); 
       }
     }
     
     //Ads.
     for(let j=0;j<this.laptop_ads.length;j++)
     {
       /*if(this.Car_Ads[i].category == 'Car')
       {
       console.log("This is a car");
       }
       else{
         console.log("Not specified category");
       }*/
       if(this.laptop_ads[j].category === this.categories[j]){
        console.log("Laptop Ad found"); 
       }
       else{
         this.laptop_ads.splice(j);
       }
     }
     
     console.log();
     //Car Ads.
     /*for(let i=0;i<this.Car_Ads.length;i++)
     {
       console.log("Car Ads");
       console.log(this.Car_Ads[i]);
     }*/
     
  }
  
}
