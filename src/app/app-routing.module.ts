import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { LearnComponent } from './components/learn/learn.component';
import { AboutComponent } from './components/about/about.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }, 
  { path: 'quiz', component: QuizComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'about', component: AboutComponent },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
