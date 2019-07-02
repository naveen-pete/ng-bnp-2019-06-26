import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private user: User = null;

  register(newUser: User, callback): void {
    const user = this.users.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
    if (user) {
      callback(`User with email '${newUser.email}' already exists.`);
      return;
    }

    this.users.unshift(newUser);
    callback(null, 'User registered successfully!');
  }

  login(email: string, password: string, callback): void {
    const user = this.users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) {
      callback('User does not exist.');
      return;
    } else if (user.loggedIn) {
      callback('User already logged in.');
      return;
    }

    user.loggedIn = true;
    this.user = user;
    callback(null, 'User logged in successfully!');
  }

  logout(callback) {
    if (!this.user) {
      callback('No user logged in.');
      return;
    }

    this.user.loggedIn = false;
    this.user = null;
    callback(null, 'User logged out successfully!');
  }

  isAuthenticated(): boolean {
    if (!this.user) {
      return false;
    }

    return this.user.loggedIn;
  }

  getUserName(): string {
    let userName = '';

    if (this.user) {
      userName = this.user.name;
    }

    return userName;
  }
}
