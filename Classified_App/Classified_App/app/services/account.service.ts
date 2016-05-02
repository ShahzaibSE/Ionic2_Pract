import {Injectable} from 'angular2/core';

@Injectable()
export class Account_Service
{
    
   register(firstName,lastName,email,phoneNo,password,reEnter_password)
   {
        //if(!email.value && password.value == reEnter_password.value)
        var keys = Object.keys(localStorage);
        console.log("Keys");
        console.log(keys);
        
        for(var i=0;i<localStorage.length;i++)
        {
           if(localStorage.key(i) != email && password == reEnter_password)
           {   
           localStorage.setItem(email,JSON.stringify({firstName,lastName,email,phoneNo,password}))
           //break;
           }
           else if(localStorage.key(i) == email)
           {
            alert("Account already exist");   
           }   
           else if(password != reEnter_password)
           {
            alert("Password not matched");
            //break;
           }
        }
        
        /*if(password == reEnter_password)
        {   
        localStorage.setItem(email,JSON.stringify({firstName,lastName,email,phoneNo,password}))
        }
        else
        {
            alert("Password not matched");
        }*/
   } 
}