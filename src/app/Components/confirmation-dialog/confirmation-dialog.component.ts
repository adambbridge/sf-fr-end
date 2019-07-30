import { UtilsService } from "./../../services/utils.service";
import { InstancesComponent } from "./../instances/instances.component";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-confirmation-dialog",
    templateUrl: "./confirmation-dialog.component.html",
    styleUrls: ["./confirmation-dialog.component.css"]
})
export class ConfirmationDialogComponent implements OnInit {
    prop = "foobar";
    title: string;
    messages: string[];
    btn1Text: string;
    btn2Text: string;
    snackBarMessage: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private utilsService: UtilsService,
        public dialogRef: MatDialogRef<ConfirmationDialogComponent>
    ) {}

    ngOnInit() {
        console.log("passed in", this._passedData);
        var d = this._passedData;

        if (d.title) {
            this.title = d.title;
        }
        if (d.messages) {
            this.messages = d.messages;
        }
        if (d.btn1Text) {
            this.btn1Text = d.btn1Text;
        }
        if (d.btn2Text) {
            this.btn2Text = d.btn2Text;
        }
        if (d.snackBarMessage) {
            this.snackBarMessage = d.snackBarMessage;
        }
    }

    onBtn1Click(): void {
        console.log("clicked cancel");
        this.dialogRef.close();
    }

    onBtn2Click() {
        this.utilsService.openSnackBar(this.snackBarMessage, null, 4000);
        this.dialogRef.close();
    }
}
