import {Page,NavController} from 'ionic-angular';

//Import Components.
import {Add} from './../add/add';
import {Show} from './../showTasks/showTask';
import {Edit} from './../edit/edit';

//Import Service.
import {Todo_Service,Todo} from './../../services/todo.service';

@Page({
  templateUrl: 'build/pages/main/main.html'
})
export class Main {
  
  //Pages.
  _Add = Add;
  _Show = Show;
  _Edit = Edit;
  
  constructor(public nav:NavController , public TodoService:Todo_Service) {
       this.nav =  nav;
       
       this.TodoService.test();
  }
  
  //Navigation Handlers
  gotoPage(page)
  {
    this.nav.push(page);
  }
  
}
