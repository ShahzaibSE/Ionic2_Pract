import {Page,NavController} from 'ionic-angular';

//Import Component.
import {Page2} from './../page2/page2';

@Page({
  templateUrl: 'build/pages/search/search.html'
})

export class Search {
  
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
  
  searchQuery;
    
  constructor(public nav:NavController) {
      
   

  }
  
  getItem(searchBar)
  {
   var q = searchBar.value;
   
   //return q;
   
   var application_cache = ApplicationCache.DOWNLOADING;
   console.log(application_cache); 
        
  }
  
}
