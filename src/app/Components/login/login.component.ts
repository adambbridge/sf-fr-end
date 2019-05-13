import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  loggedIn: boolean;

  constructor(private _authService: AuthService) {
    console.log('init');
    this.loggedIn = this._authService.IsAuth;
    this._authService.IsAuth$.subscribe({next: (b: boolean) => {
      this.loggedIn = b;
    }});
   }


  ngOnInit() {
    // this.loggedIn$.subscribe({
    //   next: (b) => console.log('logged in = ' + b)
    // });
  }

  login() {
      this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
