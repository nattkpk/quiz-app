import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/user';
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  


  constructor(private router: Router) {}
  
  async login(username: string, password: string) {
    try {
      const users = await (await fetch(this.url)).json();
      const user = users.find((user: any) => user.username === username && user.password === password);
      if (user) {
        this.isLoggedInSubject.next(true);
        console.log( `Welcome, ${user.username}!`);
        this.router.navigate(['/edit']);
        
      } else {
        console.log('Invalid username or password');
      }

    } catch (error) {
      console.error('An error occurred', error);
    }
  }
  
   
}

