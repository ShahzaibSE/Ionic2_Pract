import {Page} from 'ionic-angular';
import {Http ,Response, RequestOptions, Headers} from 'angular2/http'; 

//Import Model.
import Tasks from './../../model/task_model';

@Page({
  templateUrl: 'build/pages/add/add.html'
})
export class Add {
  
  tasks : {Tid:any,Tname:any}[] = []
  
  constructor(public http:Http) {

  }
  
  testAPI()
  {
    this.http.request('http://localhost:3000/testAPI').subscribe((res)=>
    {
      console.log("Tested");
    })
  }
  
  addTask(id:HTMLInputElement,name:HTMLInputElement)
  {
    var obj = {Tid:id.value,Tname:name.value};
    console.log(obj);
    
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    
    var Opts = new RequestOptions();
    Opts.headers = headers;
    
    //var obj = JSON.stringify({Tid:Tid.value,Tname:Tname.value})
    //var obj = new Tasks(Tid.value,Tname.value)
    
    this.http.post('http://localhost:3000/addData/tasks',JSON.stringify(obj)).
    subscribe((resp:Response) => {
        //this.tasks = resp.json().obj;
        this.tasks.push(resp.json().tasks);
        /*Tid.value = "";
        Tname.value = "";*/
    })
    console.log(this.tasks);
  }
  
}
