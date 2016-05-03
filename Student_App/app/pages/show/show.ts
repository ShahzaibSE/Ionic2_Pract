import {Page,NavController,NavParams} from 'ionic-angular';

// Student_Template/Model.
import Student from './../../model_student_properties/student_info_template';

//Components
import {Info} from './../student_info/info';

@Page({
  templateUrl: 'build/pages/show/show.html'
})
export class Show extends Student {
    
   firstname:any; 
   technology:any;
   date:any;
   
   Select_Component:HTMLInputElement;
   
     
   constructor(public nav:NavController , public navParam:NavParams)
    {
        super();
        this.nav = nav;
        this.navParam = navParam;
    }
    
    getData()
    {
        var fname_get = this.navParam.get('fnameParam');
        var lastname_get = this.navParam.get('lastnameParam');
        var dateofbirth_get = this.navParam.get('dataofbirthParam');
        var gender_get = this.navParam.get('genderParam');
        var city_get = this.navParam.get('cityParam');
        var country_get = this.navParam.get('countryParam');
        var nationality_get = this.navParam.get('nationalityParam');
        var institute_get = this.navParam.get('instituteParam');
        var technology_get = this.navParam.get('technologyParam');
        var rollno_get = this.navParam.get('rollnoParam');
        var admissionDate_get = this.navParam.get('admissionDataParam');
        
        //Now initializing Properties.
        
        this.fname = fname_get;
        this.lastname = lastname_get;
        this.dateofbirth = dateofbirth_get;
        this.gender = gender_get;
        this.city = city_get;
        this.country = country_get;
        this.nationality = nationality_get;
        this.institute = institute_get;
        this.technology = technology_get;
        this.rollno = rollno_get;
        this.admissionDate = admissionDate_get;
        
        /*console.log(fname_get);
        console.log(lastname_get);
        console.log(dateofbirth_get);
        console.log(gender_get);
        console.log(city_get);
        console.log(country_get);
        console.log(nationality_get);
        console.log(institute_get);
        console.log(technology_get);
        console.log(rollno_get);
        console.log(admissionDate_get);*/
        
        //Logging Data.
        console.log(this.fname);
        console.log(this.lastname);
        console.log(this.dateofbirth);
        console.log(this.gender);
        console.log(this.city);
        console.log(this.country);
        console.log(this.nationality);
        console.log(this.institute);
        console.log(this.technology);
        console.log(this.rollno);
        console.log(this.admissionDate);
    }
    
    get_data_2()
    {
        var firstname_get = this.navParam.get('firstname_Param');
        //var technology_get = this.navParam.get('technology_Param');
        var date_get = this.navParam.get('date_Param');
        
        this.firstname  = firstname_get;
        //this.technology = technology_get;
        this.date =  date_get;
        //this.Select_Component = technology_get;
        //console.log(firstname_get);
        console.log(`FirstName is ${this.firstname.value}`);    //NavParam is returning us a JavaScript Object , in this object value property exist.
        console.log(`Date of Birth : ${this.date.value}`);
        //console.log(`Technology is ${this.technology}`);
        //console.log(`Technology is ${this.Select_Component.select()}`);
        
        //console.log(this.navParam.data(this.navParam.get('firstname_Param')));
    }
    
}
