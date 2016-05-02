//Import Libraries.
import {Page,NavController} from 'ionic-angular';
import {FORM_DIRECTIVES,FormBuilder,Validators,AbstractControl,ControlGroup} from 'angular2/common';
import {Camera} from 'ionic-native';
import {Badge} from 'ionic-native';

//Import Models.
import {AdModels} from './../../models/ad_models';

//Import Service.
import {Ad_Submission} from './../../services/adIn.service';

@Page({
  templateUrl: 'build/pages/addAd/add_Ad.html',
  directives:[FORM_DIRECTIVES]
})

export class AdAdd {
  
  catagories : any[] = ["Cars","Laptops","Houses"];  
  show:boolean;
  ImageData;
  
  //ControlGroup.
  myForm:ControlGroup;
  
  //Form Instance Variables.
  title:AbstractControl;
  description:AbstractControl;
  category:AbstractControl;
  price:AbstractControl;
    
  constructor(public fb:FormBuilder) {
      
      //this.nav = nav;
      
      this.fb.group({
         'req' : [Validators.required]
       });
       
       this.title = this.myForm.controls['req'];
       this.description = this.myForm.controls['req'];
       this.category = this.myForm.controls['req'];
       this.price = this.myForm.controls['req'];

  }
  
  /*submitAd(title:HTMLInputElement,description:HTMLInputElement,category:HTMLInputElement,price:HTMLInputElement)
  {
      let _submitAd:Ad_Submission;
      _submitAd.submitAd(title,description,category,price);
  }*/
  
  takePicture()
  {
    let options = {
      destinationType : 1,
      allowedit:false
    }
    
    //Taking Picture.
    Camera.getPicture(options).then((imageData)=>
    {
       let base64Image = "data:image/jpeg;base64," + imageData;
       this.ImageData = base64Image;
    })
  }
  
  
  
}
