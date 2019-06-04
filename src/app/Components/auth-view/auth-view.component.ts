import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<boolean>();
  showAuthed: boolean;

  constructor(private _authService: AuthService) {
   }

   ngOnInit() {
    console.log('init');
    this.loggedIn.emit(this._authService.IsAuth);
    this._authService.IsAuth$.subscribe({next: (b: boolean) => {
      this.loggedIn.emit(b);
      this.showAuthed = b;
    }});
  }

}
