import {Injectable} from 'angular2/core';

//Import Models.
import {Login_Details} from './../models/login_model';

@Injectable()
export class Forget_Password
{
    Accounts : Array<Login_Details> = [];
    
    constructor()
    {
        
    }
    
    //Get Acccounts
   getAccounts(email)
   {
    console.log(`Email : ${email}`);
    
     //Since we have email keys , so we use Regular Expression for that, to get keys of accounts.
    var re:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
    var locaStorageKeys = Object.keys(localStorage);
    console.log(locaStorageKeys);
    
    var Account_Information;
    
    for(let i=0;i<localStorage.length;i++)
    {
     if(re.test(locaStorageKeys[i]))
     {
        alert("Account Found");
        this.Accounts.push(localStorage.getItem(locaStorageKeys[i]));
     }
     else{
        console.log("Account not found");
        //return;
     }
    }
    for(let i=0;i<this.Accounts.length;i++)
    {
     Account_Information = this.Accounts;   
     console.log(`Accounts Information : ${Account_Information[i]}`);
    }
    
    //lets return Account Information.
    return Account_Information;
   }
}