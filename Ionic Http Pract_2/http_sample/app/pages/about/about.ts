import {Page,NavController,NavOptions} from 'ionic-angular';
import {Http} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class About {
    
  constructor(public http:Http , public nav:NavController) {
         this.http = http;
         this.nav = nav;
  }
  
}
