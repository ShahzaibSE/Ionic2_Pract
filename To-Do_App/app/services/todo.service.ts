import {Injectable,EventEmitter} from 'angular2/core';
import {Alert,NavController} from 'ionic-angular';

export class Todo
{
    Tid:string;
    Tname:string;
}

@Injectable()
export class Todo_Service
{
    Todos:Array<Todo> = []
    
    addTodo(Tid,Tname)
    {
        var tmp_obj = {Tid:Tid.value,Tname:Tname.value};
        this.Todos.push(tmp_obj);
        console.log(this.Todos);
    }
    
    getTodo()   
    {
        return this.Todos;
    }
    
    addTask(Tid,Tname)
    {
        let todos : Todo = {Tid:Tid.value,Tname:Tname.value};
        localStorage.setItem(Tid.value,JSON.stringify(todos));
        
        /*let alert = Alert.create(
            {
                title:"Your todo",
                subTitle:localStorage.getItem(Tid)
            }
        )*/
        
        //this.nav.present(alert);
          
    }
    
    
    getTasks()
    {
        console.log(localStorage.length);
        //console.log(Object.keys(localStorage))  //Object.keys lists all own keys on an object.
        let keys = Object.keys(localStorage);
        console.log("Local Storage keys");
        console.log(keys);
        
        console.log("LocalStorage Data");
        
        for(let i=0;i<localStorage.length;i++)
        {
            var localStorageData = localStorage.getItem(keys[i]);
        }
        
        console.log(localStorageData);
        let Parsed_LocalStorageData = JSON.parse(localStorageData);
        console.log("Parsed LocalStorage Data");
        console.log(Parsed_LocalStorageData);
        console.log(`Task ID : ${Parsed_LocalStorageData.Tid}`);
        console.log(`Task Name : ${Parsed_LocalStorageData.Tname}`);
        
        return Object.keys(localStorage); 
    }
    
    deleteTask()
    {
        //Delete your tasks.
    }
    
    editTask(Tid,Tname)
    {
        for(let i=0;i<localStorage.length;i++)
        {
            if(localStorage.key(i) == Tid)
            {
                console.log("Key Found");
                localStorage.setItem(localStorage.key(i),JSON.stringify({Tid:Tid,Tname:Tname}));
                break;
                /*let editedAlert =  Alert.create({
                    title:"Task has been Edited"
                })
               
                this.nav.present(editedAlert);*/
                //alert('Task has been edited');
            }
            else
            {
                console.log("Key not found");
               /* let NoteditedAlert =  Alert.create({
                    title:"Task not found"
                })
                
                this.nav.present(NoteditedAlert);*/
                //alert('Task not found');
            }
        }
        
        //Test Snippet Code.
        /*if(localStorage.key(1) == "2")
        {
            console.log("Specfic key found");
        }
        else
        {
            console.log("Specfic key not found");
        }*/
    }
    
    deleteTodo()
    {
        for(var i=0;i<localStorage.length;i++)
        {
            //localStorage.removeItem()
        }
    }
    
    test()
    {
        let item_Key = localStorage.key(1);
        console.log(item_Key);
        
        let test_keys = [];
        for(var i=0;i<localStorage.length;i++)
        {
            test_keys.push(localStorage.key(i));
        }
        console.log("Names of nth keys.");
        console.log(test_keys);
    }
}