import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable, of, pipe, merge } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean;
  showRegister: boolean = true;

  constructor(private _authService: AuthService) {
    this.loggedIn = _authService.IsAuth;
  }


  ngOnInit() {
    merge(
      of(this._authService.IsAuth), // current auth state
        this._authService.IsAuth$ // future auth states
        ).subscribe({next: b => this.loggedIn = b });
    }

  login() {
      this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
