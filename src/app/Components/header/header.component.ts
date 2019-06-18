import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { merge, of } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
    @Output() sidenavToggle = new EventEmitter<void>();
    loggedIn: boolean; 

    constructor(private _authService: AuthService) {
        merge(
            of(this._authService.IsAuth), // current auth state
            this._authService.IsAuth$ // future auth states
        ).subscribe({ next: (b) => (this.loggedIn = b) });
    }
    ngOnInit() {
        merge(
            of(this._authService.IsAuth), // current auth state
            this._authService.IsAuth$ // future auth states
        ).subscribe({ next: (b) => (this.loggedIn = b) });
    }

    onToggleSidenav() {
        this.sidenavToggle.emit();
    }

    logout() {
        this._authService.logout();
    }
}
