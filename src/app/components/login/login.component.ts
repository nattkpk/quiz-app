import { Component, inject } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authService: AuthService = inject(AuthService);
  user: User[] = [];
  username = '';
  password = '';
  loginError = false;
  constructor() {}

  onLogin() {
    console.log(this.username + this.password);
    const isAuthenticated = this.authService.login(
      this.username,
      this.password
    );
    this.loginError = true
  }
}
