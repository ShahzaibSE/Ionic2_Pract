import {Page,NavController,NavOptions,Tab,Tabs} from 'ionic-angular';
import {Http} from 'angular2/http';

//Components.
import {Info} from './../info/info';
import {About} from './../about/about';
import {Add} from './../add/add';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class Main {
      
    
  constructor(public http:Http , public nav:NavController) {
         this.http = http;
         this.nav = nav;
         
   
         /*this.info  = Info;
         this.about = About;
         this.add = Add;*/
         
  }
  
}
