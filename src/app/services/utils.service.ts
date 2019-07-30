import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";


@Injectable({
    providedIn: "root"
})
export class UtilsService {
    constructor(
        private _snackBar: MatSnackBar,
        private dialog: MatDialog,
    ) {}

    openSnackBar(mssg, action?, duration?) {
        if (duration) {
            duration = duration;
        } else {
            duration = 4000;
        }
        this._snackBar.open(mssg, action, { duration: duration });
    }

    // openDialogBox(component, dataObject: object) {
    //     const dialogRef = this.dialog.open(component, {
    //         data: dataObject
    //     });
    //     return dialogRef;
    // }
}
