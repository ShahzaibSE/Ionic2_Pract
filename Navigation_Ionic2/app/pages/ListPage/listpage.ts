import {Page,NavController,NavParams} from 'ionic-angular';  //Here you'll see something new , we imported NavParameters from ionic-angular. 

//Importing Component.
import {HomePage} from './../home/home';
import {Data} from './../DataPage/datapage';

@Page({
  templateUrl: 'build/pages/listpage/listpage.html'
})
export class List {
    
    constructor(public nav:NavController , public navParams:NavParams)
    {
        this.nav = nav;
        this.navParams = navParams;  //NavParamaters inorder to pass to other pages.
    }
    
    gotoDataPage()
    {
        this.nav.push(Data);
        //We can go to Home Page.
    }
    
    showData()
    {
        var result_1 = this.navParams.get('thing1');   //Here we are getting data parameter passed from DataPage Component and storing it in a data structure of any type.
        var result_2 = this.navParams.get('thing2');
        
        var data = this.navParams.data;
        console.log(`Data1 : ${data.thing1}`);
        console.log(`Data2 : ${data.thing2}`);

        console.log(`Data1 from Data Entry Page: ${result_1}`); //Now we are logging the navParam data in the console.
        console.log(`Data2 from Data Entry Page: ${result_2}`);    
}
    
}
