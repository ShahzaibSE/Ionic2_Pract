import {Page} from 'ionic-angular';

//Import Models.
import {Questions} from './../../models/question_model';


@Page({
  templateUrl: 'build/pages/question/question.html'
})
export class Question {
  constructor() {

  }

  questions_arr : Array<Questions> = [
    {question:"1.	What does HTML stand for?",option1:"Hyperter Tool MarkUp Language",option2:"Hyper Text MarkUp Language",option3:"Hyper Text Marking Language"}
  ]
}
