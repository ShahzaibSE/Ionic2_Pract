import {Injectable,provide} from '@angular/core';

@Injectable()
export class Score{
    counter:number;

    //Score Counter.
    scoreCounter(){
        this.counter+=1;
        console.log(`Score Counter : ${this.counter}`);
    }
}

export var SCORE_PROVIDER:Array<any>=[provide(Score,{useClass:Score})];