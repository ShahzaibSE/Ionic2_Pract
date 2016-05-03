import {Page,NavController,ActionSheet,Modal,Loading,ViewController,Alert} from 'ionic-angular';

enum Days {'Day1','Day2'};

//Import Component.
import {Account} from './../account/account';
import {Bike} from './../bikes/bikes';
import {Car} from './../cars/cars';
import {Laptop} from './../laptops/laptops';
import {Page1} from './../page1/page1';
import {AdAdd} from './../addAd/add_Ad';
import {Search} from './../search/search';
import {NewAd} from './../newAd/newAd';
import {Login} from './../login/login';
import {House} from './../houses/house';

//Sample Component to Test.
import {Sample} from './../sample/sample';

//Import Models.
import {AdModels} from './../../models/ad_models';


//Import Services.
import {Test,Test_Model} from './../../services/app.services';
import {Ad_Submission} from './../../services/adIn.service';

@Page({
  templateUrl: 'build/pages/main/main.html'
})

export class Main {
 
 //Pages
  yourAds;   
  //Pages.  
  account = Account;
  //adAdd = AdAdd;
  search = Search;
  Add = NewAd;
  _Login = Login;
  _Sample = Sample;
  
  //Rest of Properties and method.
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
  
  //Ad_Details.
  Ad_Details:AdModels[] = [];
  Ads:Array<AdModels> = [];
  
  test_data
  
  Test_Service:Test_Model;
    
  constructor(public nav:NavController ,public View:ViewController, public _AdAdd:Ad_Submission) {
      
      this.nav = nav;
      
      //Getting Ads.
      this.getyourads();
      //console.log(this._AdAdd.getAds());
      
      //this.test_data = this._Test_Service.set_Data();
      //Loading Indicating Function.
      //this.AppStarting();
      //this.getAds();

  }
  
  Show_More_Categories()
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
                      //this.AppStarting();
                      let cars = Modal.create(Car);
                      this.nav.present(cars);
                  }
              },
              {
                  text:"Laptops",
                  handler:()=>{
                      //console.log("Laptop Catagory");
                      //this.nav.push(Laptop);
                      //this.AppStarting();
                      let laptops = Modal.create(Laptop);
                      this.nav.present(laptops);
                  }
              },
              {
                  text:"Bikes",
                  handler:()=>{
                      //console.log("Bike Catagory");
                      //this.nav.push(Bike);
                      //this.AppStarting();
                      let bikes = Modal.create(Bike);
                      this.nav.present(bikes);
                  }
              },
              {
                  text:"Cancel",
                  role:"cancel",
                  handler:()=>{
                      console.log("Cancelled");
                      //this.nav.push(Main);
                      let alert = Alert.create(
                          {
                              title:"Cancelled"
                          }
                      )
                      this.nav.present(alert);
                  }
              }
          ]
      })
      
      this.nav.present(More_Catagories);
  }
  
  _Show_More_Categories()
  {
    let $ActionSheet = ActionSheet.create({
        title : "More Categories",
        buttons : [
            {
                text:"Cars",
                handler:()=>{
                    this.nav.push(Car);
                }
            },
            {
                text:"Laptops",
                handler:()=>{
                    this.nav.push(Laptop);
                }
            },
            {
                text:"House",
                handler:()=>{
                    this.nav.push(House);
                }
            },
            {
                text:"Cancel",
                handler:()=>{
                    let cancel = Alert.create({
                        title:"Cancel"
                    })
                }
            }
        ]
    })   
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
  
  //Navigation Function.
  
  getyourads()
  {
      var ad_keys = this._AdAdd.getAds();
      console.log(`Ad keys : ${ad_keys}`);
      
      console.log("These are the ads");
      
      //Now lets try to get ad details.
      //var ad_details; 
      //Email Regular Expression.
      var re:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
       for(let i=0;i<localStorage.length;i++)
       {
         if(!re.test(ad_keys[i]))
         {  
         this.Ads.push(JSON.parse(localStorage.getItem(ad_keys[i])));
         console.log(`Title : ${this.Ads[i].title}`);
         console.log(`Description : ${this.Ads[i].description}`);
         console.log(`Category : ${this.Ads[i].category}`);
         console.log(`Price : ${this.Ads[i].price}`); 
         }
         else{
             console.log("Not Ad Key");
         }
       }
      //console.log(`Ad Details : ${ad_details}`);
      
      /*var JSON_format_ad_details = JSON.parse(ad_details);
      this.Ad_Details = JSON_format_ad_details;*/
      
      //console.log(this.Ad_Details);
     
      //Displaying details distinctly.
      /*for(let i=0;i<localStorage.length;i++)
      {
       this.Ad_Details.push(JSON.parse(localStorage.getItem(ad_keys[i])));
      }
      console.log(this.Ad_Details);*/
      /*console.log(`Ad Tile : ${JSON_format_ad_details.title}`);
      console.log(`Ad Description : ${JSON_format_ad_details.description}`);
      console.log(`Ad Category : ${JSON_format_ad_details.category}`);
      console.log(`Ad Price : ${JSON_format_ad_details.price}`);*/
      
      //console.log(Days[0]);
  }
  
  gotoPage(page)
  {
     this.nav.push(page);   
  }
  
  //getting Ads.
  getAds()
  {
      this.yourAds = this._AdAdd.getAds();
      console.log(this.yourAds);
  }
  
  //Function from services.
  /*Test_get()
  {
     console.log(this._Test_Service.get_Data());
  }
  
  Test_set()
  {
     this._Test_Service.set_Data();
  }
  
  Test_clear()
  {
     this._Test_Service.clear_Data();
  }*/
  
}
