import {Page,NavController} from 'ionic-angular';

//Import Component forgot_password.
import {Forgot_Password} from './../forgot_password/forgot_password';

@Page({
  templateUrl: 'build/pages/login/login.html'
})

export class Login {
     
  constructor(public nav:NavController) {

  }
  
   //Navigation Handler.
   gotoForgot_Password()
   {
     this.nav.push(Forgot_Password);
   }
  
}
