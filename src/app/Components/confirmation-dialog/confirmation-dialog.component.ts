import { UtilsService } from "./../../services/utils.service";
import { InstancesComponent } from "./../instances/instances.component";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
    selector: "app-confirmation-dialog",
    templateUrl: "./confirmation-dialog.component.html",
    styleUrls: ["./confirmation-dialog.component.css"]
})
export class ConfirmationDialogComponent implements OnInit {
    title: string;
    messages: string[];
    btn1Text?: string;
    btn2Text: string;
    snackBarCancelMessage?: string;
    snackBarConfirmMessage?: string;
    destinationOnClose?: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private utilsService: UtilsService,
        public confirmDialogRef: MatDialogRef<ConfirmationDialogComponent>,
        private router: Router
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
        if (d.snackBarConfirmMessage) {
            this.snackBarConfirmMessage = d.snackBarConfirmMessage;
        }
        if (d.snackBarCancelMessage) {
            this.snackBarCancelMessage = d.snackBarCancelMessage;
        }
        if (d.destinationOnClose) {
            this.destinationOnClose = d.destinationOnClose;
        }
    }

    onBtn1Click(): void {
        console.log("clicked cancel");
        if (this.snackBarCancelMessage) {
            this.utilsService.openSnackBar(
                this.snackBarCancelMessage,
                null,
                4000
            );
        }
        this.confirmDialogRef.close();
        if (this.destinationOnClose) {
            this.router.navigate([this.destinationOnClose]);
        }
    }

    onBtn2Click() {
        if (this.snackBarConfirmMessage) {
            this.utilsService.openSnackBar(
                this.snackBarConfirmMessage,
                null,
                4000
            );
        }
        this.confirmDialogRef.close();
        if (this.destinationOnClose) {
            this.router.navigate([this.destinationOnClose]);
        }
    }
}
