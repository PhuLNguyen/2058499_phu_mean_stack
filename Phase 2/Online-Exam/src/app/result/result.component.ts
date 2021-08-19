import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  score: number = 0;
  finishGrading: boolean = false;
  question: Question[] = [];
  answer: Answer[] = [];

  constructor(
    public answerService: AnswerService,
    public activatedRoute: ActivatedRoute  
  ) { 
    // listen to the user answer
    this.activatedRoute.params.subscribe(data => {
      // received user answer
      this.question = JSON.parse(data.questionJsonStr);
      console.log("from Result component", this.question);

      // listen to the correct answer
      this.answerService.loadAnswerJsonData().subscribe(
        // store the correct answer
        data => this.answer = data,
        error => console.log(error),
        () => {
          console.log("from Result component", this.answer);
          // start grading process
          this.gradeQuiz();
        }
      );
    });
  }

  ngOnInit(): void {
  }

  gradeQuiz() {
    for(let i = 0; i < this.question.length; i++) {
      if (this.question[i].userAnswer === this.answer[i].ans) {
        this.question[i].result = true;
        this.score++;
      } else {
        this.question[i].result = false;
      }
    }

    this.score = Math.round(this.score / this.question.length * 100);

    this.finishGrading = true;
  }

}
