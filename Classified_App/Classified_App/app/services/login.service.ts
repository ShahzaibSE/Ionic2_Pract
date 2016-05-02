import {Injectable} from 'angular2/core';

//Models
import {Login_Details} from './../models/login_model';

@Injectable()
export class Login_Service
{
    
    Login_status;
    Accounts:{}[] = [];
    //Login_Details:{}[] = [];
    Login_Details:Array<Login_Details> = [];
    
    login(email,password)
    {
        var keys = Object.keys(localStorage);
        console.log(`Keys: ${keys}`);
        
        for(let i=0;i<localStorage.length;i++)
        {
           this.Accounts.push(JSON.parse(localStorage.getItem(keys[i])));
           console.log(this.Accounts[i])
        }
         
        console.log(`Accounts:`);
        //console.log(this.Accounts);
        
        //Email Regular Expression.
        var re:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        for(let i=0;i<localStorage.length;i++)
        {
            //Fetching Email and validating it.
            if(re.test(localStorage.key(i)))
            {
                //alert("Email is Found & Email is Valid");
                console.log("Email is Found & Email is Valid");
                this.Login_Details.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            else{
                //alert("Email not Found");
                console.log("Email not Found");
            }
        }
        
        console.log("Login Details");
        console.log(this.Login_Details);
        
        /*if(re.test('shahzaibnoorscientist@ssuet.com'))
        {
            alert("Email is valid");
        }
        else
        {
            alert("Email is not valid");
        }*/
    }
    
    checkAuthentication(email,password)
    {
        this.login(email,password);
        console.log("Login Accounts:");
                
        for(let i=0;i<this.Login_Details.length;i++)
        {
            console.log(`Login Accounts : ${this.Login_Details[i]}`)
        }
        
        //Test Snippet.
        /*var obj_arr : {input1:any,input2:any}[] = [{input1:'data3',input2:'data4'}];
        
        for(let i=0;i<obj_arr.length;i++)
        {
            console.log(obj_arr[i].input1)
        }*/
           
        //Authenticating.
        for(let i=0;i<this.Login_Details.length;i++)
        {
            if(email == this.Login_Details[i].email && password == this.Login_Details[i].password)
            {
                console.log("User Found");
                return true;
            }
            else{
                console.log("User Not Found");
                return false;
            }
        }
      }
}