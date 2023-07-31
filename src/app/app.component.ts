import { Component,inject } from '@angular/core';
import { Choice, Question } from './question';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  audiop = new Audio();
  audior = new Audio();

  quizService: QuizService = inject(QuizService);
  questions : Question[];
  currentQuestionIndex = 0;
  isEnd = false;
  score = 0;

  constructor() {
    this.questions = this.quizService.getQuizData();
    this.audiop.src = '../assets/audio/mixpop.wav';
    this.audior.src = '../assets/audio/resound.mp3';
  }

  onClickChoice(choice: Choice) {
    console.log('User clicked: ' + choice.text);
    this.playSound();
    if (choice.isAnswer) {
      this.score++;
    }
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.questions[this.currentQuestionIndex].choices.sort((a, b) => 0.5 - Math.random())
    } else {
      this.isEnd = true;
    }
  }

  private playSound() {
    this.audiop.load();
    this.audiop.addEventListener('canplaythrough', () => {
      this.audiop.play();
    });
  }
  private reSound() {
    this.audior.load();
    this.audior.addEventListener('canplaythrough', () => {
      this.audior.play();
    });
  }

  onClickNewQuiz() {
    this.newQuiz();
    this.reSound();
  }

  private newQuiz() {
    this.questions.sort((a, b) => 0.5 - Math.random());
    this.isEnd = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}

