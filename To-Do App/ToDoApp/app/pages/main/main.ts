import {Page,NavController} from 'ionic-angular';

//Import Components.
import {Add} from './../add/add';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class Main {
  
  constructor(public nav:NavController) {
       this.nav =  nav;
  }
  
  //Navigation Handlers
  addTask()
  {
    this.nav.push(Add);
  }
  
}
