import {Page,NavController,Alert} from 'ionic-angular';
import {Http,Headers,RequestOptions} from 'angular2/http';
//import {NgFor} from 'angular2/common';

//Import Component.
import {Detail} from './../details/detail';


export class PostModel
{
    userid;
    id;
    title;
    body;
}

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    url = "http://samplejsonapi.herokuapp.com/";
    
    list_posts:Array<PostModel>;
    //list_of_times:Array<PostModel>=[];
    
    data: {}[];
    
    constructor(public http:Http , public nav:NavController)
    {
         this.http = http;
         this.nav=nav;
    }
    
     alert_loader(){
        let loader = Alert.create({
            title: 'Loading...'
        });
        
        return {
            show : () => {
                this.nav.present(loader);
                return loader;
            } 
        }
    }
    
    makeRequest()
    {
        let header = new Headers();
        header.append('content-type','Application/json');
        
        let ReqOpts = new RequestOptions();
        ReqOpts.headers = header;
        
        /*let alert = Alert.create(
            {
                title:"Are you sure?",
                buttons:['Ok'],
            }
        )
        
        this.nav.present(alert);*/
        
        let loader = this.alert_loader().show();
        
        
                 //let loader = this.alert_loader().show();
            this.http.request(this.url + "posts")
                     .subscribe((res)=>{
                           console.log(res.json())
                           this.list_posts = res.json();
                           loader.destroy();
                         }, (err)=>{
                               console.log(err)
                               loader.destroy();
                            })
               //console.log(res.json());
               //this.list_posts = res;
               //this.data = {id:1,name:"Ben"};
               /*console.log("Request Posts from HTTP");
               console.log(this.list_posts);
               loader.destroy();*/
               
               //console.log("Get Posts");    
        //console.log("Make Http Request");   
    }
    
    /*loader(){
        let loader = Alert.create({
            title: 'Loading...'
        });
        
        return {
            show : () => {
                this.nav.present(loader);
                return loader;
            } 
        }
    }
    
    makeHttpRequest(){
        
        console.log("Make Request");
        let loader = this.loader().show();

        this.http.request(this.url + "posts")
            .subscribe((res)=>{
                console.log(res.json())
                this.list_posts = res.json();
                loader.destroy();
            }, (err)=>{
                console.log(err)
                loader.destroy();
            })
    }*/

    gotoDetail(item:PostModel)
    {
        this.nav.push(Detail,item);
    }
     
}
