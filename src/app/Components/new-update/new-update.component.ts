import { FakeDataService } from "src/app/services/fake-data.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "./../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-new-update",
    templateUrl: "./new-update.component.html",
    styleUrls: ["./new-update.component.css"]
})
export class NewUpdateComponent implements OnInit {
    solution;
    sourceOrgId;
    sourceOrg;
    updateForm;
    spacesForUpdate;
    spacesCurrent;

    /** FAKE DATA */
    // spaces have workspaceName, apps
    allSourceOrgSpaces;
    versions = [
        {
            versionNumber: "0.0",
            versionName: "Yosemite",
            spaces: [{ workspaceId: 123 }]
        },
        {
            versionNumber: "1.0",
            versionName: "El Capitan",
            spaces: [{ workspaceId: 123 }]
        }
    ];

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private dialog: MatDialog,
        public updateDialog: MatDialogRef<NewUpdateComponent>,
        private fb: FormBuilder,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.solution = this._passedData.solution;
        /** TODO USE THIS WHEN WE USE REAL DATA  */
        this.sourceOrgId = this.solution.workspaces[0].podioSpace.org_id;
        this.sourceOrg = this.fakeDataService.fakeOrganization1;
        this.allSourceOrgSpaces = this.sourceOrg.spaces;
        // todo: set selected spaces from most recent version of solution?

        this.updateForm = this.fb.group({
            solution: ["", Validators.required],
            version: ["", Validators.required],
            source: [""],
            name: [""],
            notes: [""]
        });
        this.updateForm.controls.solution.setValue(
            this._passedData.solution.name
        );
    }

    onVersionSelection() {
        let version = this.updateForm.value.version;
        /**
         * TODO: show currently used spaces as checked
         */
        this.spacesCurrent = version.spaces;
        this.allSourceOrgSpaces.forEach((space) => {});
    }

    /** this captures updated selected spaces */
    onSpaceSelection(selected) {
        this.spacesForUpdate = selected;
        console.log("selected spaces:", this.spacesForUpdate);
    }

    onSubmit() {
        console.warn(this.updateForm.value);
        console.warn(this.updateForm.valid);
        this.updateDialog.close();
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: this.getConfirmationDialogData()
        });
    }

    /************************
     *  HELPER METHODS
     ************************/

    private getConfirmationDialogData() {
        let data = {
            title: "Confirm Update",
            btn1Text: "Cancel",
            btn2Text: "Update",
            snackBarCancelMessage: "Update cancelled",
            snackBarConfirmMessage: "Update scheduled",
            messages: [
                "This will create a new solution version. Old versions will remain available.",
                "This may take a minute. We'll email ___ when it's done."
            ]
        };
        return data;
    }
}
