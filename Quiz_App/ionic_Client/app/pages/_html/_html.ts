import {Page} from 'ionic-angular';
import {FormBuilder,ControlGroup,Validators} from '@angular/common';

//Import Questions.
import {questions_arr} from './../../data/questions';

//Import Models.
import {Questions} from './../../models/question_model';
import {answers_arr} from './../../models/answer_model';


@Page({
  templateUrl: 'build/pages/_html/_html.html'
})
export class Html {
  
  constructor() {
           
  }

  GetAnswer(val){
      var radioValue = val.value;
      console.log(`My Selection : ${radioValue}`);
      radioValue = " ";
      //Let's check questions.
       questions_arr.forEach(element => {
         console.log(element);
      });
  }

  //Load Question.
  loadQuestion(){
    
  }
}
