import {Page,NavController} from 'ionic-angular';

//Import Component.
import {About} from './../about/about';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    gotoAbout()
    {
        this.nav.push(About);
    }
    
}
