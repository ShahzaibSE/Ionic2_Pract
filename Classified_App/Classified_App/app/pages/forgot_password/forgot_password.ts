import {Page,NavController} from 'ionic-angular';

//Import Forget Password Service.
import {Forget_Password} from './../../services/forget_password.service';

@Page({
  templateUrl: 'build/pages/forgot_password/forgot_password.html'
})

export class Forgot_Password {
     
  constructor(public _Forget_Password:Forget_Password) {
         this.somefun();
  }
  
  retrievePassword(email:HTMLInputElement)
  {
    var $Account_Infos = this._Forget_Password.getAccounts(email.value);
    console.log(`Accounts Infos : ${$Account_Infos}`);
  }
  
  somefun()
  {
    var obj = Function.prototype.apply(this,['Batman','Superman','Wonder Woman','Spiderman','The Flash']);
    console.log(`Current Object : ${JSON.stringify(this)}`);    //This gives you the name of current object , which is Forget_Password.
  }
  
}
