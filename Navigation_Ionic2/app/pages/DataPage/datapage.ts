import {Page,NavController,NavParams} from 'ionic-angular';

//Importing Component.
import {HomePage} from './../home/home';
import {List} from './../ListPage/listpage'

@Page({
  templateUrl: 'build/pages/datapage/datapage.html'
})
export class Data {
    
    //public data_set = ['Shahzaib','Ali','Basit','Umer'];
    
    public mybiodata1 :string = "Shahzaib";
    public mybiodata2 :string = "Ali";
    
    
    constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
    gotoList()
    {
        var data1 = this.mybiodata1;
        var data2 = this.mybiodata2;
        
        /*function return_params(param1,param2,callback:Function)
        {
            param1 = data1;
            param2 = data2;
            return callback(param1,param2)
        }*/
        
        var obj :{thing1:string,thing2:string} = {thing1:data1,thing2:data2};
        
        this.nav.push(List,{
            thing1 : "Shahzaib",
            thing2 : "Noor"
        });
        
        //his.nav.push(List,obj);
    }
    
    /*gotoList()
    {
        this.nav.push(List);
    }*/
    
}
