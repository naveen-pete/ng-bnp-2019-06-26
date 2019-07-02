import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.authService.login(email, password, (error, success) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Success:', success);
        this.router.navigate(['/products']);
      }
    });
  }
}
