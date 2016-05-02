import {Injectable} from 'angular2/core';

export class Test_Model{
    id:string;
    name:string;
    price:string;
}


@Injectable()

export class Test
{
    
    set_Data()
    {
        let test_property:Test_Model= {id : "1",
                                       name : "Test_1",
                                       price : "250020"};
        
        //Storing data in local storage.
        localStorage.setItem('test_data',JSON.stringify(test_property));
       
    }
    
    get_Data()
    {
        //console.log(this.test_property);
        return localStorage.getItem('test_data');
    }
    
    clear_Data()
    {
        localStorage.clear();
    }
}