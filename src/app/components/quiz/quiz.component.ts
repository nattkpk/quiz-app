import { Component, inject } from '@angular/core';
import { Choice, Question } from '../../model/question';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  audiop = new Audio();
  audior = new Audio();

  quizService: QuizService = inject(QuizService);
  questions: Question[] = [];
  currentQuestionIndex = 0;
  isEnd = false;
  score = 0;

  constructor() {
    this.quizService.getQuizData().then((questions) => {
      this.questions = questions;
      this.questions.forEach((question) => {
        question.choices = question.choices.filter((choice) => choice.text !== '');
      });
    });
    this.audiop.src = '../assets/audio/mixpop.wav';
    this.audior.src = '../assets/audio/resound.mp3';
    this.newQuiz();
  }

  onClickChoice(choice: Choice) {
    console.log('User clicked: ' + choice.text);
    this.playSound();
    if (choice.isAnswer) {
      this.score++;
    }
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.questions[this.currentQuestionIndex].choices.sort(
        (a, b) => 0.5 - Math.random()
      );
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
