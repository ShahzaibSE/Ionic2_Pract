import {Page,Alert,NavController,NavParams,Nav} from 'ionic-angular';
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
  
  constructor(public ToDo:Todo_Service ,public nav:NavController) {
    
    //this.deleteEvent = new EventEmitter();

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

    //Todos.
    console.log("Your Todos");
    for(let i=0;i<this.tasks.length;i++){
      console.log(this.tasks[i]);
    }
    
    
    console.log("Your Todos");
    console.log(`ToDos : ${this.tasks}`);
  }
  
  deleteTodo()
  {
   var key_data_to_delete = this.ToDo.getTasks(); 

   //checking Task Array.
   for(var i=0;i<this.tasks.length;i++){
     console.log("Task:");
     console.log(this.tasks[i]);
   }
   

   /*for(var i=0;i<localStorage.length;i++)
   {  
     this.deleteEvent.emit(localStorage.getItem(key_data_to_delete[i]));0
   }*/
    
   //this.deleteEvent.add()
   
   //Handler to delete task.
  }

  deleteTask(Tid){
    for(let i=0;i<this.tasks.length;i++){
      if(Tid == this.tasks[i].Tid){
        this.tasks.splice(i,1);
      }else{
        let taskStatus = Alert.create({
          title:"Task not Found",
          buttons:['Ok']
        })
        this.nav.present(taskStatus);
      }
    }
  }
}
