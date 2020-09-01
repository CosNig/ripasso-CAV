import { Router } from '@angular/router';
import { AuthService } from './features/shared/services/auth.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLogged$: Subject<boolean>;

  constructor(public auth: AuthService, private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.isLogged$ = this.auth.isLogged$();
  }
}
