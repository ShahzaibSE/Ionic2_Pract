import {Page,NavController} from 'ionic-angular';

//Import Component.
import {Account} from './../account/account';

@Page({
  templateUrl: 'build/pages/main/main.html'
})

export class Main {
  
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
    
  constructor(public nav:NavController) {
      
      this.nav = nav;

  }
  
  Show_More_Catagories()
  {
      this.show =  this.catagories ? false:true
  }
  
  //Navigation Handlers.
  Register()
  {
      console.log("Add new user");
      this.nav.push(Account);
  }
  
}
