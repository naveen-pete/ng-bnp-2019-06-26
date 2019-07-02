import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout((error, success) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Success:', success);
        this.router.navigate(['/']);
      }
    });
  }

}
