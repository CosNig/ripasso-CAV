import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLogin: boolean;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isLogged$().subscribe((result) => {
      result
        ? this.router.navigate(['/dashboard'])
        : (this.invalidLogin = true);
    });
  }

  login(username: string, password: string): void {
    this.auth.login(username, password);
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
