import {Page} from 'ionic-angular';
import {FormBuilder,ControlGroup,Validators} from '@angular/common';

//Import Questions.
import {questions_arr} from './../../data/questions';

//Import Models.
import {Questions} from './../../models/question_model';
import {answers_arr} from './../../models/answer_model';


@Page({
  templateUrl: 'build/pages/test/test.html'
})
export class Test {

  counter:number;

  arr=["California","Pakistan","Belgium"];

  questions : Array<Questions> = [];
  
  constructor() {
           //this.load_question();
           this.load_Question();
  }

  GetAnswer(val){
      var radioValue = val.value;
      console.log(`My Selection : ${radioValue}`);
      radioValue = " ";
  }

  load_question(){
     //Pushing questions in new array of questions.
     for(let i=0;i<questions_arr.length;i++){
       this.questions.push(questions_arr[i]);
     }

     console.log("Questions:");
     this.questions.forEach(element => {
       console.log(element);
     });
  }

  //Pushing Question Handler in the new array.
  pushQuestions(arr:Array<Questions>){
     var i=0;
     while(i<arr.length){
       this.questions.push(arr[i]);
       i++;
       break;
     }
     console.log(`Loop Counter: ${i}`);
  }

  //New Question Loading Handler.
  load_Question(){
    this.pushQuestions(questions_arr);
      console.log(`Questions:`);
     this.questions.forEach(element => {
     console.log(element);
   });
  }

  //Handler to remove previous element in the question array.
  removeQuestion(arr:Array<Questions>){
    var i=0;
    while(i<arr.length){
      arr.splice(i);
      i--;
      break;
    }
    console.log(`Quiz Question: ${arr}`);
  }
}
