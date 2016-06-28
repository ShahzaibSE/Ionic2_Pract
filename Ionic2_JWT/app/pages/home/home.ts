import {Page} from 'ionic-angular';
import {AuthHttp} from 'angular2-jwt';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  data:any;
  
  constructor(public auth:AuthHttp) {
     this.getdata();
  }
  getdata(){
    this.auth.get('http://jsonplaceholder.typicode.com/posts').
     subscribe((data)=>{
       console.log(data.json())
       this.data = data;
     }),
     (err)=>{
       console.log(err)
      },
     ()=>{
       console.log("Completed");
     }
  }
}
