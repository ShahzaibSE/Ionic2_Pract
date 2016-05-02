import {Page,NavController} from 'ionic-angular';

//Import Component.
import {Page2} from './../page2/page2';

//Import Models.
import {AdModels} from './../../models/ad_models';

//Import Service.
import {Ad_Submission} from './../../services/adIn.service';

@Page({
  templateUrl: 'build/pages/newAd/newAd.html'
})

export class NewAd {
  
  categories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
    
  constructor(public nav:NavController,public Ad_Add:Ad_Submission) {
      
   

  }
  
  submitAd(title:HTMLInputElement,description:HTMLInputElement,category:HTMLInputElement,price:HTMLInputElement)
  {
      this.Ad_Add.submitAd(title.value,description.value,category.value,price.value);
      
      console.log(this.Ad_Add.getAds());
  }
  
}
