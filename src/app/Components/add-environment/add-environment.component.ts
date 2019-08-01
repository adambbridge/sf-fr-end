import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FakeDataService, IPodioOrganizationViewModel } from "src/app/services/fake-data.service";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "./../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-add-environment",
    templateUrl: "./add-environment.component.html",
    styleUrls: ["./add-environment.component.css"]
})
export class AddEnvironmentComponent implements OnInit {
    loginForm: FormGroup;
    availableEnvs;
    showContent = false;
    @ViewChild("envs") envs;
    selectedOrgs: IPodioOrganizationViewModel[] = [];

    constructor(
        private _fakeDataService: FakeDataService,
        private _fb: FormBuilder,
        public addOrgDialog: MatDialogRef<AddEnvironmentComponent>,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.loginForm = this._createForm();
        this.availableEnvs = this._fakeDataService.fakeOrganizations;
    }

    onOrgSelection() {
        this.selectedOrgs = this.envs.selectedOptions.selected.map(
            (option) => option.value
        );
        console.log(this.selectedOrgs);
    }

    onCancelClick(): void {
        console.log("clicked cancel");
        this.addOrgDialog.close();
    }

    onSubmit() {
        // delete this.form.value.environments; // true/false values
        // this.form.value.selectedEnvs = this.selectedEnvs;
        // console.warn(this.form.value);

        this.addOrgDialog.close();
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: this.getConfirmationDialogData()
        });
    }

    onHeaderClick() {
        this.showContent = true;
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
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        return form;
    }
}
