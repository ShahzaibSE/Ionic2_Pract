import {Page,NavController,NavOptions} from 'ionic-angular';
import {Http} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/info/info.html'
})
export class Info {
    
  constructor(public http:Http , public nav:NavController) {
         this.http = http;
         this.nav = nav;
  }
  
}
