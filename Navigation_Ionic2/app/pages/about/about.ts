import {Page,NavController} from 'ionic-angular';

//Importing Component.
import {HomePage} from './../home/home';

@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class About {
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    gotoHome()
    {
        this.nav.push(HomePage);
        //We can go to Home Page.
    }
    
}
