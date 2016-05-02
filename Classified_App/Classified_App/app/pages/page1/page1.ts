import {Page,NavController} from 'ionic-angular';

//Import Component.
import {Page2} from './../page2/page2';
import {Menu} from './../menu/menu';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  //directives:[Menu]
})

export class Page1 {
  
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
    
  constructor(public nav:NavController) {
      
      this.nav = nav;

  }
  
  Show_More_Catagories()
  {
      this.show =  this.catagories ? false:true
  }
  
  //Navigation Handlers.
  gotoPage2()
  {
      console.log("Go to Page#2");
      this.nav.push(Page2);
  }
  
}
