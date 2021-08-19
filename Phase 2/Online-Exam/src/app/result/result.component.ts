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

  userAnswerReady: boolean = false;
  correctAnswerReady: boolean = false;
  question: Question[] = [];
  answer: Answer[] = [];

  constructor(
    public answerService: AnswerService,
    public activatedRoute: ActivatedRoute  
  ) { 
    this.answerService.loadAnswerJsonData().subscribe(
      data => this.answer = data,
      error => console.log(error),
      () => {
        console.log("from Result component", this.answer);
        this.correctAnswerReady = true;
      }
    );
    this.activatedRoute.params.subscribe(data => {
      this.question = JSON.parse(data.questionJsonStr);
      console.log("from Result component", this.question);
      this.userAnswerReady = true;
    });
  }

  ngOnInit(): void {
  }

}
