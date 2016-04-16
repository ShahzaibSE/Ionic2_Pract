import {Page,NavController} from 'ionic-angular';

//Import Component.
import {Page1} from './../page1/page1';

@Page({
  templateUrl: 'build/pages/page2/page2.html'
})

export class Page2 {
  
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
  /*gotoPage1()
  {
      console.log("Go To Page#1");
      this.nav.push(Page1);
  }*/
  
}
