import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizApp'
  question = {
    text: 'Who painted the Mona Lisa??..',
    choices: [
      'Pablo Picasso',
      'Lenonardo da Vinci',
      'Vincent van Gogh',
      'Michelangelo'
    ],
  };

  onClickChoice(choice: string) {
    console.log(choice);
  }
}

