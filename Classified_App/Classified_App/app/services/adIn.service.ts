import {Injectable} from 'angular2/core';

//Import Models.
import {AdModels} from './../models/ad_models';

/*export class AdModel
{
    title:string;
    description:string;
    category:string;
    price:string;
}*/

@Injectable()

export class Ad_Submission
{
    //Function to Submit Ad.
    submitAd(title,description,category,price)
    {
        let Ad_Details : AdModels = {
            title:title,
            description:description,
            category:category,
            price:price
        }
        
        console.log(`Ad details : ${Ad_Details}`);
        
        localStorage.setItem(title,JSON.stringify(Ad_Details)); 
    }
    
    getAds()
    {
        return Object.keys(localStorage);
    }
    
}