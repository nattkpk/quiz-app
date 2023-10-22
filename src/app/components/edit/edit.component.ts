import { Component, inject } from '@angular/core';
import { Question } from '../../model/question';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  quizService: QuizService = inject(QuizService);
  questions: Question[] = [];
  newText = '';
  trueChoice = '';
  falseChoice1 = '';
  falseChoice2 = '';
  falseChoice3 = '';

  constructor() {
    this.quizService.getQuizData().then((questions) => {
      this.questions = questions;
    });
  }
  getCorrectAnswerText(choices: any[]): string {
    const correctChoice = choices.find((choice) => choice.isAnswer === true);
    return correctChoice.text;
  }

  async addQuestion() {
    let newQuestion: Question = {
      id: this.questions.length + 1,
      text: this.newText,
      choices: [
        {
          id: 1,
          text: this.trueChoice,
          isAnswer: true,
        },
        {
          id: 2,
          text: this.falseChoice1,
          isAnswer: false,
        },
        {
          id: 3,
          text: this.falseChoice2,
          isAnswer: false,
        },
        {
          id: 4,
          text: this.falseChoice3,
          isAnswer: false,
        },
      ],
    };
    this.questions.push(newQuestion);
    try {
      const response = await this.quizService.addQuestion(newQuestion);
      console.log('Question added successfully', response);
    } catch (error) {
      console.error('Error adding question', error);
    }
    this.newText = '';
    this.trueChoice = '';
    this.falseChoice1 = '';
    this.falseChoice2 = '';
    this.falseChoice3 = '';
  }

  async deleteQuestion(questionId: number) {
    try {
      const response = await this.quizService.deleteQuestion(questionId);
      this.questions = this.questions.filter(
        (question) => question.id !== questionId
      );
      console.log('Question deleted successfully', response);
    } catch (error) {
      console.error('Error deleting question', error);
    }
  }
}
