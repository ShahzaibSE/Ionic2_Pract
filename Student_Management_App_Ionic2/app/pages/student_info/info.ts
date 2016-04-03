import {Page,NavController,NavParams,Alert} from 'ionic-angular';
import {EventEmitter} from 'angular2/core';

//Components.
import {Show} from './../show/show';

@Page({
  templateUrl: 'build/pages/student_info/info.html'
})
export class Info {
    
   public technology : string[] = ["Computer Science","BioMedical Engineering","Electronics","Electrical Engineering",
                                    "Software Engineering","Telecommunication Engineering"]; 
   
   data:{}[] = [] 
   
   //list:HTMLSelectElement;
    
   constructor(public nav:NavController)
    {
        this.nav = nav;
    }
    
   /*pushData(fname:HTMLInputElement,lastname:HTMLInputElement,gender:HTMLInputElement,
            city:HTMLInputElement,country:HTMLInputElement,Nationality:HTMLInputElement,dob:HTMLInputElement,
            institute:HTMLInputElement,technology:HTMLInputElement,rollno:HTMLInputElement,admissionDate:HTMLInputElement)*/
            
   
   pushData(fname:HTMLInputElement,lastname:HTMLInputElement,gender:HTMLInputElement,
            city:HTMLInputElement,country:HTMLInputElement,Nationality:HTMLInputElement,dob:HTMLInputElement,
            institute:HTMLInputElement,technology:HTMLInputElement,rollno:HTMLInputElement,admissionDate:HTMLInputElement)         
   {
      /*this.nav.push(Show,{
          fnameParam:fname.value,
          lastnameParam:lastname.value,
          dataofbirthParam:dob.value,
          genderParam:gender.value,
          cityParam:city.value,
          countryParam:country.value,
          nationalityParam:Nationality.value,
          instituteParam:institute.value,
          technologyParam:technology.value,
          rollnoParam:rollno.value,
          admissionDataParam:admissionDate.value
      })*/
      
      /*this.data.push({status:true,message:"Data Pushed"});
      console.log(this.data[0]);*/
      
      /*this.data.push({fname:fname.value,lastname:lastname.value,dataofbirth:dob.value
                      ,gender:gender.value,city:city.value,country:country.value,nationality:Nationality.value
                       ,insititute:institute.value,technology:technology.value,rollno:rollno.value,admissiondate:admissionDate.value})*/
        
         /*this.data.push(fname.value,lastname.value,dob.value
                      ,gender.value,city.value,country.value,Nationality.value
                       ,institute.value,technology.value,rollno.value,admissionDate.value)
        console.log(this.data)*/
        
        /*console.log(fname.value);
        console.log(lastname.value);
        console.log(dob.value);
        console.log(gender.value);
        console.log(city.value);
        console.log(country.value);
        console.log(Nationality.value);
        console.log(institute.value);
        console.log(technology.value);
        console.log(rollno.value);
        console.log(admissionDate.value);*/
       
   }    
   
   //push_data_2(firstname:HTMLInputElement,technology:HTMLSelectElement,date:HTMLInputElement)
   push_data_2(firstname:HTMLInputElement,date:HTMLInputElement)
   {
      //this.nav.push(Show,{firstname_Param:firstname});   
      
      //Basic Alert.
       /*let alert = Alert.create({
            title: 'Are you sure?',
            subTitle: 'Are you really sure?!',
            buttons: ['Ok']
            
            
        });
        
        this.nav.present(alert)*/
        
        //Confirmation Alert.
        let confirm =  Alert.create({
              title: 'Use this lightsaber?',
              message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
              buttons: [
                {
                 text: 'Agree',
                 handler: () => {
                   this.nav.push(Show,{firstname_Param:firstname,date_Param:date});
                  }
                },
              {
               text: 'Disagree',
               handler: () => {
                console.log('Disagree clicked');
               }
             }
           ]
         });
         
         this.nav.present(confirm);
      //this.nav.push(Show,{firstname_Param:firstname,date_Param:date});    
   }
   
   onChange(deviceValue:HTMLInputElement)
   {
       /*var select_Element:HTMLSelectElement;
       var option_index  =  select_Element.selectedIndex;*/
       //console.log(`Current Option: ${option_value}`); 
       //console.log('Option selected');
       console.log(deviceValue.value);
      
   }
}
