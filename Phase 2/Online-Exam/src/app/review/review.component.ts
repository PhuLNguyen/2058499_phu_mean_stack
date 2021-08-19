import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  question: Question[] = [];

  // DI for ActivatedRoute
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { 
    this.activatedRoute.params.subscribe(data => {
      this.question = JSON.parse(data.questionJsonStr);
      console.log("from Review component", this.question);
    });
    
  }

  ngOnInit(): void {
  }

  checkResult() {
    this.router.navigate(["result", JSON.stringify(this.question)]);
  }

}
