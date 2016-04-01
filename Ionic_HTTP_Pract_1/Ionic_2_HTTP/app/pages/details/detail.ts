import {Page,NavController,NavParams} from 'ionic-angular';
import {Http,Headers,RequestOptions} from 'angular2/http';

//Import Model.
import {PostModel} from './../home/home';

@Page({
  templateUrl: 'build/pages/details/detail.html'
})
export class Detail {
    
    url = "http://samplejsonapi.herokuapp.com/";
    
    data;
    
    comments:Array<any>;
    
    //list_posts:{}={};
    //list_of_times:Array<PostModel>=[];
    
    constructor(public http:Http,public nav:NavController , public params:NavParams)
    {
         this.nav = nav;
         this.data = this.params.data;
    }
    
    makeDetailrequest()
    {
        let header = new Headers();
        header.append('content-type','Application/json');
        
        let ReqOpts = new RequestOptions();
        ReqOpts.headers = header;
        
        this.http.request(this.url+"posts"+"/"+this.data.id+"/comments").
           subscribe((res)=>
           {
               //console.log(res.json());
               this.comments = res.json();
               console.log(this.comments);  
           })
           
        //console.log("Make Http Request");   
    }
    
    
}
