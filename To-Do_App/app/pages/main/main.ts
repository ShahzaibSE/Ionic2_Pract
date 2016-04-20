import {Page,NavController} from 'ionic-angular';

//Import Components.
import {Add} from './../add/add';
import {Show} from './../showTasks/showTask';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class Main {
  
  //Pages.
  _Add = Add;
  _Show = Show;
  
  constructor(public nav:NavController) {
       this.nav =  nav;
  }
  
  //Navigation Handlers
  gotoPage(page)
  {
    this.nav.push(page);
  }
  
}
