import { Component } from '@angular/core';
import { AuthService } from '../app/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  launchRocket() {
    const rocket = document.getElementById('rocket');
    if (rocket) {
      rocket.style.display = 'block';
      rocket.style.top = '200%';
      setTimeout(() => {
        rocket.style.top = '-80%';
      }, 10);

      setTimeout(() => {
        rocket.style.display = 'none';
      }, 1000);
    }
  }

  async logout() {
    await this.launchRocket();
    await location.reload();
  }
}
