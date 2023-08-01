import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  launchRocket() {
    const rocket = document.getElementById('rocket');
    if (rocket) {
      rocket.style.display = 'block';
      rocket.style.top = '100%'; 
      setTimeout(() => {
        rocket.style.top = '0';
      }, 10);
      
      setTimeout(() => {
        rocket.style.display = 'none';
        rocket.style.top = '100%';
      }, 1500);
    }
  }
}

