import {Page,NavController,Alert} from 'ionic-angular';

//Import Login Component
import {Login} from './../login/login';
import {Account_Service} from './../../services/account.service';

@Page({
  templateUrl: 'build/pages/account/account.html'
})

export class Account {
     
  constructor(public nav:NavController , public Create_Account:Account_Service) {

  }
  
  
  gotoLogin()
  {
    this.nav.push(Login);
  }
  
  //Register New User.
  NewUser_Register(firstName:HTMLInputElement,lastName:HTMLInputElement,email:HTMLInputElement,phoneNo:HTMLInputElement,
                           password:HTMLInputElement,reEnter_password:HTMLInputElement)
  {
    this.Create_Account.register(firstName.value,lastName.value,email.value,phoneNo.value,password.value,reEnter_password.value);
  }
  
}
