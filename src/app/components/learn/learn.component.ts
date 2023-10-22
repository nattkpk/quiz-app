import { Component, inject } from '@angular/core';
import { Question } from '../../model/question';
import { QuizService } from '../../service/quiz.service';
@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
})
export class LearnComponent {
  audiop = new Audio();
  audior = new Audio();

  quizService: QuizService = inject(QuizService);
  questions: Question[] = [];
  currentQuestionIndex = 0;
  isList = false;

  constructor() {
    this.quizService.getQuizData().then((questions) => {
      this.questions = questions;
    });
    this.audiop.src = '../assets/audio/mixpop.wav';
  }

  next() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.playSound();
      this.currentQuestionIndex++;
    }
  }
  previous() {
    if (this.currentQuestionIndex > 0) {
      this.playSound();
      this.currentQuestionIndex--;
    }
  }

  each() {
    this.playSound();
    this.isList = false;
  }

  list() {
    this.playSound();
    this.isList = true;
  }

  private playSound() {
    this.audiop.load();
    this.audiop.addEventListener('canplaythrough', () => {
      this.audiop.play();
    });
  }

  getCorrectAnswerText(choices: any[]): string {
    const correctChoice = choices.find((choice) => choice.isAnswer === true);
    return correctChoice.text;
  }
}
