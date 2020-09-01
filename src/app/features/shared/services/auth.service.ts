import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly MOCKED_USERNAME = 'user';
  private MOCKED_PASSWORD = 'password';
  private logged = false;
  private logged$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) {}

  public login(username: string, password: string): void {
    if (
      username === this.MOCKED_USERNAME &&
      password === this.MOCKED_PASSWORD
    ) {
      this.logged$.next(true);
      this.logged = true;
    } else {
      this.logged$.next(false);
      this.logged = false;
    }
  }

  public logout(): void {
    if (this.logged$) {
      this.logged$.next(false);
      this.router.navigate(['/dashboard']);
    } else {
      console.warn(`User is already logged off`);
    }
    this.logged = false;
  }

  public isLogged$(): Subject<boolean> {
    return this.logged$;
  }

  public isLogged(): boolean {
    return this.logged;
  }
}
