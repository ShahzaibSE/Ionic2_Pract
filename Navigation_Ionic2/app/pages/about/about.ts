import {Page,NavController} from 'ionic-angular';

//Importing Component.
import {HomePage} from './../home/home';
import {Data} from './../DataPage/datapage';

@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class About {
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    gotoData()
    {
        //this.nav.pop();
        this.nav.push(Data);
        //We can go to Home Page.
    }
    
}
