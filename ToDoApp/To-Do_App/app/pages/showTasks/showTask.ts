import {Page} from 'ionic-angular';
import {Http ,Response, RequestOptions, Headers} from 'angular2/http'; 
import {EventEmitter} from 'angular2/core';

/*//Import Model.
import Tasks from './../../model/task_model';*/

//Import Component.
import {Main} from './../main/main';

//Import Service.
import {Todo_Service,Todo} from './../../services/todo.service';

@Page({
  templateUrl: 'build/pages/showTasks/showTask.html'
})
export class Show {
  
  tasks : {Tid:any,Tname:any}[] = []
  //parsed tasks into string.
  _tasks : {Tid:any,Tname:any}[] = []
  
  //Event Emitter.
  deleteEvent:EventEmitter<Todo>;
  
  constructor(public ToDo:Todo_Service) {
    
    this.deleteEvent = new EventEmitter();

  }
  
  getTask()
  {
    this.tasks = this.ToDo.getTodo();
    console.log("ToDos:");
    console.log(this.tasks);
    
  }
  
  get_Task()
  {
    var keys = this.ToDo.getTasks();
    console.log(`Keys : ${keys}`);
    
    for(var i=0;i<localStorage.length;i++)
    {
      this.tasks.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    
    
    console.log("Your Todos");
    console.log(`ToDos : ${this.tasks}`);
  }

  //Creating custom event , In our case delete.
  
  
  deleteTodo()
  {
   var key_data_to_delete = this.ToDo.getTasks(); 
   
   for(var i=0;i<localStorage.length;i++)
   {  
     this.deleteEvent.emit(localStorage.getItem(key_data_to_delete[i]));
   }
    
   //this.deleteEvent.add()
  }
}
