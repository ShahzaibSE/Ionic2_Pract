import {Page,NavController,Alert} from 'ionic-angular';

//Import Component forgot_password.
import {Forgot_Password} from './../forgot_password/forgot_password';

//Import login Service.
import {Login_Service} from './../../services/login.service';

//Import Model or Blueprint (email,firstname,lastname,password,phoneNo)
//import  from './../../../models/login_model';

@Page({
  templateUrl: 'build/pages/sample/sample.html'
})

export class Sample {
     
  constructor(public nav:NavController , public loginService:Login_Service) {
      
  }
  
  submitSampleData(input1:HTMLInputElement,input2:HTMLInputElement)
  {
    localStorage.setItem('mytest#1',JSON.stringify({Input1:input1.value,Input2:input2.value}));
  }
  
  getItem()
  {
    let output = localStorage.getItem('mytest#1');
    console.log(`Sample Data : ${JSON.parse(output)}`);
    var parsed_output = JSON.parse(output);
    console.log(parsed_output.Input1);
  }
  
}
