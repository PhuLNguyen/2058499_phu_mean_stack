import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs';

// "providedIn: 'root'" is Singleton 
@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	// DI for HttpClient
	constructor(public http: HttpClient) { }

	// convert all JSON data into "Question" model class.
	loadQuestionJsonData(): Observable<Question[]> {
		return this.http.get<Question[]>("../../assets/question.json");
	}
}
