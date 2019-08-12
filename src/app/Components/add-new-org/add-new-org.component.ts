import { Component, OnInit, Input, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {
    FakeDataService,
    IPodioOrganizationViewModel,
    IClientViewModel
} from "src/app/services/fake-data.service";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

/**
 * INPUTS   client,
 * OUTPUTS  client, email, pwd
 * IMPORTS  passedData, ref to close itself, dialog to open confirm, formbuilder,
 * METHODS
 * init - callsCreateForm, sets value of client if client
 * createForm- calls formbuilder,
 * onsubmit,- calls service with form data, calls close
 * oncancel, - calls close
 *
 */

@Component({
    selector: "app-add-new-org",
    templateUrl: "./add-new-org.component.html",
    styleUrls: ["./add-new-org.component.css"]
})
export class AddNewOrgComponent implements OnInit {
    form: FormGroup;
    client?: IClientViewModel;

    constructor(
        private _fb: FormBuilder,
        public addNewOrgDialog: MatDialogRef<AddNewOrgComponent>,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.form = this._createForm();
        if (this._passedData.client) {
            this.client = this._passedData.client;
        }
    }

    onCancelClick(): void {
        console.log("clicked cancel");
        this.addNewOrgDialog.close();
    }

    onSubmitCredentials() {
        this.addNewOrgDialog.close("add");
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: this.getConfirmationDialogData()
        });
    }

    /** ==================
     * HELPER METHODS 
     ===================== */

    private getConfirmationDialogData() {
        return {
            title: "Adding Organization...",
            btn2Text: "OK",
            messages: [
                "This may take a minute.",
                "You can close this dialog and do other stuff",
                "We'll email _____ when it's done."
            ]
        };
    }

    private _createForm() {
        let form = this._fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        return form;
    }
}
