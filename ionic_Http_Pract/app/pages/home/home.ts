import {Page} from 'ionic-angular';
import {Http,RequestOptions,Headers} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    constructor(public http:Http)
    {
        
    }
    
    makeRequest()
    {
        let header = new Headers();
        header.append('Content-Type','Application/String');
        
        let ReqOptions = new RequestOptions();
        ReqOptions.headers = header;
        
        //Lets make a get request.
        this.http.request('http://localhost:3000/getthis').
        subscribe((res)=>{
            console.log(res.json());
        })
    }
    
}
