import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: "quiz", component: QuizComponent},
  {path: "result/:questionJsonStr", component: ResultComponent}, // "questionJsonStr" is receive the value from a path, ONLY accept string type
  {path: "review/:questionJsonStr", component: ReviewComponent}, // "questionJsonStr" is receive the value from a path, ONLY accept string type
  {path: "", redirectTo: "quiz", pathMatch: "full"} // empty path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
