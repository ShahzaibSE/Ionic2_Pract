import {Page,NavController,Alert} from 'ionic-angular';

//Import Component forgot_password.
import {Forgot_Password} from './../forgot_password/forgot_password';

//Import login Service.
import {Login_Service} from './../../services/login.service';

//Import Model or Blueprint (email,firstname,lastname,password,phoneNo)
//import  from './../../../models/login_model';

@Page({
  templateUrl: 'build/pages/login/login.html'
})

export class Login {
     
  constructor(public nav:NavController , public loginService:Login_Service) {
      
  }
  
   //Navigation Handler.
   gotoForgot_Password()
   {
     this.nav.push(Forgot_Password);
   }
   
   login(email:HTMLInputElement,password:HTMLInputElement)
   {
     this.loginService.login(email.value,password.value);
     
     email.value  = "";
     password.value == "";
   }
   
   checkAuthentication(email:HTMLInputElement,password:HTMLInputElement)
   {
     var flag = this.loginService.checkAuthentication(email.value,password.value);
     
     if(flag)
     {
       let positive = Alert.create({
           title : 'Redirecting...'
       })
       this.nav.present(positive);
     }
     else{
        let negative = Alert.create({
          title: 'Invalid Username or Password'
        })
        this.nav.present(negative);
     }
   }
  
}
