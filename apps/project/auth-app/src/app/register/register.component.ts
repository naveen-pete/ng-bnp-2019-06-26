import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') form;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form.value, (error, success) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Success:', success);
        this.router.navigate(['/']);
      }
    });
  }

}
