import {Page} from 'ionic-angular';
import {Http ,Response, RequestOptions, Headers} from 'angular2/http'; 

/*//Import Model.
import Tasks from './../../model/task_model';*/

//Import Component.
import {Main} from './../main/main';

//Import Service.
import {Todo_Service,Todo} from './../../services/todo.service';

@Page({
  templateUrl: 'build/pages/add/add.html'
})
export class Add {
  
  tasks : {Tid:any,Tname:any}[] = []
  
  constructor(public ToDo:Todo_Service,public http:Http) {

  }
  
  addTask(Tid:HTMLInputElement,Tname:HTMLInputElement)
  {
    //this.ToDo.addTodo(Tid,Tname);
    this.ToDo.addTask(Tid,Tname);
    Tid.value = "";
    Tname.value ="";
  }

  //Adding Task on the server.
  addTasks(Tid:HTMLInputElement,Tname:HTMLInputElement){
       let headers = new Headers();
       headers.append('content-type','application/json');

       let options = new RequestOptions();
       options.headers = headers;

       var obj = {Tid:Tid.value,Tname:Tname.value};

       this.http.post("http://localhost:3000/addData/tasks",JSON.stringify(obj),options).
        subscribe((tasks)=>{
          this.tasks.push(obj);
          //console.log(tasks);
        })
  }
}
