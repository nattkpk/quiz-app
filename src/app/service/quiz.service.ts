import { Injectable } from '@angular/core';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private url = 'http://localhost:3000/question';

  constructor() {}

  async getQuizData() {
    const res = await fetch(this.url);
    return res.json();
  }
  async addQuestion(newQuestion: Question): Promise<Question> {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    });
    return res.json();
  }

  async deleteQuestion(questionId: number): Promise<void> {
    const deleteUrl = `${this.url}/${questionId}`;
    const res = await fetch(deleteUrl, {
      method: 'DELETE',
    });
    return res.json();
  }
}
