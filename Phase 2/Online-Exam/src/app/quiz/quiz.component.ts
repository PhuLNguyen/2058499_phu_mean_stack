import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../models/question.model';
import { DatabaseService } from '../services/database.service';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

	totalQuestion: number = 0;
	questionNumber: number = 0;
	question: Question[] = [];

	// DI for DatabaseService and Router
	constructor(
		public database: DatabaseService,
		public router: Router
	) { 
		this.database.loadQuestionJsonData().subscribe(
			data => this.question = data,
			error => console.log(error),
			() => {
				console.log(this.question);
				this.totalQuestion = this.question.length;
			}
		);
	}

	ngOnInit(): void {
	}

	displayQuestion(questionRef: NgForm) {
		let userAnswer = questionRef.value.answer;

		console.log("from Quiz component", questionRef.value);

		// record the answer of the user
		if (userAnswer == null || userAnswer == "") {
			this.question[this.questionNumber].userAnswer = "not answered"
		} else {
			this.question[this.questionNumber].userAnswer = userAnswer;
		}

		// if this question is not the last question, 
		//	then move to the next question,
		//	else move to the "Review" screen
		if (this.questionNumber < this.totalQuestion - 1) {
			this.questionNumber++;
		} else {
			this.router.navigate(["review", JSON.stringify(this.question)]);
		}

		// to clear out the selected radio button from the last question
		questionRef.reset();
	}

}
