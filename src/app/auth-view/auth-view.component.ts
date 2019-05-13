import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
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
    // this.authService.IsAuth$.subscribe({
    //   next: (b: boolean) => {
    //     console.log('got a: ' + b);
    //     this.visible = b;
    //   }
    // });
  }

}
