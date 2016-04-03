import {Page,Alert} from 'ionic-angular';
import {Http} from 'angular2/http';
import {FirebaseListObservable,AngularFire} from 'angularfire2';

//Model.
import {Superhero} from './../model/model';


@Page({
  templateUrl: 'build/pages/add/add.html'
})
export class Add {  
  
  //Superhero_Data:Superhero;  
  
  Superhero_Data:FirebaseListObservable<any[]>;  
  
  some_property:FirebaseListObservable<any>;
    
  constructor(af:AngularFire) {
      
      this.Superhero_Data = af.list('/SuperHero_Data');
      
  }
  
  /*addInfo(id:HTMLInputElement,codeName:HTMLInputElement)
  {
      console.log(`Superhero ID: ${id.value}`);
      console.log(`Superhero Name: ${codeName.value}`);
      
      if(id && codeName)
      {
          let Success_Alert = Alert.create(
              {
                  title:"Data Entered",
                  buttons:["Ok"]
              }
          )
      }
      else
      {
          let notEntered_Alert = Alert.create(
              {
                  title:"Please Enter Data",
                  buttons:["Ok"]
              }
          )
      }
  }*/
  
  addInfo(id:HTMLInputElement,codeName:HTMLInputElement)
  {
      //var obj : {id:any , codeName:any} = {id:id.value , codeName:codeName.value};
      this.Superhero_Data.add(id.value);
      this.Superhero_Data.add(codeName.value);
      
      //this.some_property
              
  }
  
  removeItem(id)
  {
      this.Superhero_Data.remove(id);
  }
  
}

