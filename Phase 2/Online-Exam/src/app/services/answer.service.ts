import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  // DI for HttpClient
	constructor(public http: HttpClient) { }

  // convert all JSON data into "Answer" model class.
	loadAnswerJsonData(): Observable<Answer[]> {
		return this.http.get<Answer[]>("../../assets/answer.json");
	}
}
