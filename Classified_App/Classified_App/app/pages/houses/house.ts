import {Page,NavController,ViewController} from 'ionic-angular';

//Import Home Component.
import {Main} from './../main/main';


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
  
}
