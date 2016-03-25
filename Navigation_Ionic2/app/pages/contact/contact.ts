import {Page,NavController} from 'ionic-angular';

//Import Component.
import {About} from './../about/about';
import {List} from './../ListPage/listpage';
import {Data} from './../DataPage/datapage';
import {HomePage} from './../home/home';

@Page({
  templateUrl: 'build/pages/contact/contact.html'
})
export class Contact {
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    /*gotoAbout()
    {
        this.nav.push(About);
    }*/
    
    /*gotoData()
    {
        //var data =setTimeout(function() {
             this.nav.push(Data);
       // }, 2000);
        
        //clearTimeout(data);
    }*/
    
    gotoHome()
    {
        this.nav.push(HomePage);
    }
    
}
