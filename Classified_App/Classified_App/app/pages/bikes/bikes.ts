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
  templateUrl: 'build/pages/bikes/bikes.html'
})

export class Bike {
     
   constructor(public nav:NavController , public viewController:ViewController) {
    
    this.viewController = viewController;

  }
  
  gotoHome()
  {
    this.nav.push(Main);
  }
  
  getads_bike()
  {
    
  }
  
}
