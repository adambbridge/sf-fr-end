import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FakeDataService, IPodioOrganizationViewModel, IClientViewModel } from "src/app/services/fake-data.service";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-add-known-org",
    templateUrl: "./add-known-org.component.html",
    styleUrls: ["./add-known-org.component.css"]
})
export class AddKnownOrgComponent implements OnInit {
    form: FormGroup;
    orgs: IPodioOrganizationViewModel[];
    client?: IClientViewModel;

    constructor(
        private _fakeDataService: FakeDataService,
        private _fb: FormBuilder,
        public addKnownOrgDialog: MatDialogRef<AddKnownOrgComponent>,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.orgs = this._fakeDataService.fakeOrganizations;
        this.form = this._createForm();
        if (this._passedData.client) {
            this.client = this._passedData.client;
        }
    }

    onCancelClick(): void {
        console.log("clicked cancel");
        this.addKnownOrgDialog.close();
    }

    onSubmitCredentials() {
        this.addKnownOrgDialog.close("add");
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
                "We'll email _____ when it's done."
            ]
        };
    }

    private _createForm() {
        let form = this._fb.group({
            org: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        return form;
    }
}