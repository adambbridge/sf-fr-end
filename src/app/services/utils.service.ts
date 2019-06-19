import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: "root"
})
export class UtilsService {
    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(mssg, action?, duration?) {
        if(duration) {
            duration = duration; 
        } else {
            duration = 4000;
        }
        this._snackBar.open(mssg, action, { duration: duration });
    }
}
