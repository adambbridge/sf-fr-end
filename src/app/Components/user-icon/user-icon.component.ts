import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SaasafrasService } from '../../services/saasafras.service';
import { Observable } from 'rxjs';
import { User } from 'src/model/saasafras/user';
import { Jwt } from 'src/model/saasafras/jwt';
import { MatMenuTrigger } from '@angular/material';
import { Solution, Solutions } from 'src/model/saasafras/solution';
import { Client, Clients } from 'src/model/saasafras/client';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.css']
})
export class SaasafrasMenuComponent implements OnInit {
  user = new User('n/a', 'n/a');
  currentSolution = new Solution('', '', '', null);
  solutions = new Array<Solution>();
  currentClient = new Client('', '');
  clients = new Array<string>();
  tasks = new Array<any>(
    {
      name: 'backup',
      icon: 'backup'
    }, {
      name: 'audit',
      icon: 'search'
    }, {
      name: 'model',
      icon: 'table_chart'
    }, {
      name: 'connect',
      icon: 'link'
    }, {
      name: 'invite',
      icon: 'send'
    });
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }
  constructor(private _authService: AuthService, private _saasService: SaasafrasService) {
    this._authService.tokenHook().subscribe({next: (jwt: Jwt) => {
      this.user = new User(jwt.scope, jwt.accountId);
    }});
    this._saasService.GetSolutions().subscribe({next: (sols: Solutions) => {
      this.solutions = sols.solutions;
    }});
    this._saasService.GetClients().subscribe({next: (cls: Clients) => {
      this.clients = cls.clientIds;
    }});
   }
   do(a: any) {

   }

  ngOnInit() {
  }
  updateSolution() {

  }
  logout() {
    console.log('logging out.');
    this._authService.logout();
  }

}
