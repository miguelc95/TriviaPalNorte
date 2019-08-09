import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from "./questions/questions.component";
import { CoverComponent } from "./cover/cover.component";

const routes: Routes = [
  { path: 'questions', component: QuestionsComponent },
  { path: '',
    redirectTo: '/cover',
    pathMatch: 'full'
  },
  { path: 'cover', component: CoverComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
