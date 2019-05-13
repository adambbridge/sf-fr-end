import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SaasafrasService } from '../../services/saasafras.service';
import { Observable } from 'rxjs';
import { User } from 'src/model/saasafras/user';
import { Jwt } from 'src/model/saasafras/jwt';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class UserIconComponent implements OnInit {
  user: User;
  links = [
    {title: 'Solutions Home', id: 'gotosolutions'},
    {title: 'Settings', id: 'login'},
    {title: 'Accounts', id: 'accounts'},
    {title: 'Feedback', id: 'feedback'}
  ];

  constructor(private _authService: AuthService) {
    this.user = new User('n/a', 'n/a');
    this._authService.token$.subscribe({next: (jwt: Jwt) => {
      this.user = new User(jwt.scope, jwt.accountId);
    }});
   }

  ngOnInit() {
  }
  logout() {
    console.log('logging out.');
    this._authService.logout();
  }

}
