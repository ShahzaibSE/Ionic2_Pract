import {Page} from 'ionic-angular';
import {Http,RequestOptions,Headers,Response} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class Main {
  constructor(public http:Http) {

  }
  
  sendRequest(){
       this.http.request('http://jsonplaceholder.typicode.com/posts/1').
       subscribe((res:Response)=>{
         console.log(res);
       })
  }
  
}
