import {Page,NavController} from 'ionic-angular';

//Import Login Component
import {Login} from './../login/login';

@Page({
  templateUrl: 'build/pages/account/account.html'
})

export class Account {
  
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
    
  constructor(public nav:NavController) {

  }
  
  Show_More_Catagories()
  {
      this.show =  this.catagories ? false:true
  }
  
  gotoLogin()
  {
    this.nav.push(Login);
  }
  
}
