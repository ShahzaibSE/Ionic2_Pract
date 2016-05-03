import {Page,NavbarTemplate,NavController} from 'ionic-angular';

//Import Components.
import {Info} from './../student_info/info';
import {Show} from './../show/show';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class Main {
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    addInfo()
    {
        this.nav.push(Info);
    }
    
    showData()
    {
        this.nav.push(Show);
    }
    
}

