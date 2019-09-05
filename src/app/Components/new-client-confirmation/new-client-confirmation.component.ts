import { AddAccountComponent } from "./../add-account/add-account.component";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";
import { IClientViewModel } from 'src/app/services/fake-data.service';

@Component({
    selector: "app-new-client-confirmation",
    templateUrl: "./new-client-confirmation.component.html",
    styleUrls: ["./new-client-confirmation.component.css"]
})
export class NewClientConfirmationComponent implements OnInit {
    submitted: boolean = false;
    client: IClientViewModel;

    constructor(
        public confirmDialog: MatDialogRef<NewClientConfirmationComponent>,
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) private _passedData: any
    ) {}

    ngOnInit() {
        this.client = this._passedData.client;
    }

    onCancelClick(): void {
        this.confirmDialog.close("cancel");
    }

    onSubmit() {
        this.submitted = true;
        const addAccountDialog = this.dialog.open(AddAccountComponent, {
            data: this.client
        });

        this.confirmDialog.close();
    }
}
