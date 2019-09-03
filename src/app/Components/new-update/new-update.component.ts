import { FakeDataService } from "src/app/services/fake-data.service";
import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "./../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";
import { UtilsService } from "./../../services/utils.service";


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
    spacesAllInOrg;
    spacesCurrentlyUsed;
    spacesToUseForNewVersion;
    versions;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private dialog: MatDialog,
        public updateDialog: MatDialogRef<NewUpdateComponent>,
        private _utilsService: UtilsService,
        private fb: FormBuilder,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.solution = this._passedData.solution;
        this.sourceOrg = this.fakeDataService.fakeOrganization1;
        this.spacesAllInOrg = this.sourceOrg.spaces;

        this.updateForm = this.fb.group({
            solution: ["", Validators.required],
            version: ["", Validators.required],
            workspaces: [""], // what is source ??
            name: [""],
            notes: [""]
        });
        this.updateForm.controls.solution.setValue(
            this._passedData.solution.name
        );

        this.versions = [
            {
                versionNumber: "0.0",
                versionName: "Yosemite",
                spaces: [this.fakeDataService.fakeWorkspace1]
            },
            {
                versionNumber: "1.0",
                versionName: "El Capitan",
                spaces: [this.fakeDataService.fakeWorkspace2]
            }
        ];
    }

    onVersionSelection() {
        this.spacesCurrentlyUsed = this.updateForm.value.version.spaces;
    }

    onSpaceSelection(selected) {
        this.spacesToUseForNewVersion = selected;
        console.log("selected spaces:", this.spacesToUseForNewVersion);
    }

    onCancelClick(): void {
        this.updateDialog.close("cancel");
        this._utilsService.openSnackBar("Update cancelled");
    }

    onSubmit() {
        this.updateForm.controls.workspaces.setValue(
            this.spacesToUseForNewVersion
        );
        console.warn(this.updateForm.value);
        console.warn(this.updateForm.valid);
        // TODO call service to run task... then update versions with new one etc.
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
