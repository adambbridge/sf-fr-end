import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { merge, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  constructor(private _authService: AuthService) {
    merge(
      of(this._authService.IsAuth), // current auth state
        this._authService.IsAuth$ // future auth states
        ).subscribe({next: b => this.loggedIn = b });
    }
  ngOnInit() {
    merge(
      of(this._authService.IsAuth), // current auth state
        this._authService.IsAuth$ // future auth states
        ).subscribe({next: b => this.loggedIn = b });
  }
}
