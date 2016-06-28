import {Page} from 'ionic-angular';
import {Http ,Response, RequestOptions, Headers} from 'angular2/http'; 

/*//Import Model.
import Tasks from './../../model/task_model';*/

//Import Component.
import {Main} from './../main/main';

//Import Service.
import {Todo_Service,Todo} from './../../services/todo.service';

@Page({
  templateUrl: 'build/pages/edit/edit.html'
})
export class Edit {
  
  tasks : {Tid:any,Tname:any}[] = []
  
  constructor(public ToDo:Todo_Service) {

  }
  
  addTask(Tid:HTMLInputElement,Tname:HTMLInputElement)
  {
    //this.ToDo.addTodo(Tid,Tname);
    this.ToDo.addTask(Tid,Tname);
  }
  
  editTask(Tid:HTMLInputElement,Tname:HTMLInputElement)
  {
    this.ToDo.editTask(Tid.value,Tname.value);
    Tid.value = "";
    Tname.value ="";
  }
}
