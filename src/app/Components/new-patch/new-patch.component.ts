import { AddKnownOrgComponent } from "../add-known-org/add-known-org.component";
import { UtilsService } from "./../../services/utils.service";
import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { FakeDataService } from "src/app/services/fake-data.service";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { setDefaultService } from "selenium-webdriver/chrome";
import { SaasafrasService } from "src/app/services/saasafras.service";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "./../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";
import { NewDeploymentComponent } from "src/app/Components/new-deployment/new-deployment.component";

@Component({
    selector: "app-new-patch",
    templateUrl: "./new-patch.component.html",
    styleUrls: ["./new-patch.component.css"]
})
export class NewPatchComponent implements OnInit {
    solution;
    clients;
    instances;
    selectedInstances;
    instancePreselection: boolean = false;
    form: FormGroup;
    //TODO these would be solution properties?
    versions = [1, 2, "KYdev1", "KYdev2", "KYqa1"];
    patchImpactOnSpaces = null;
    minDate = new Date();
    maxDate = this._getMaxDate();
    patchDate;
    confirmationDialog;

    constructor(
        private _fb: FormBuilder,
        private _fakeDataService: FakeDataService,
        private _utilsService: UtilsService,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        public patchDialog: MatDialogRef<NewPatchComponent>,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        if (this._passedData.solution) {
            this.solution = this._passedData.solution;
        } else {
            this.solution = this._fakeDataService.fakeSolution;
        }
        if (this._passedData.preSelectedInstances) {
            this.instances = this._passedData.preSelectedInstances;
            this.selectedInstances = this.instances;
            this.instancePreselection = true;
        } else {
            if (this.solution.instances) {
                this.instances = this.solution.instances;
            } else {
                this.instances = this._fakeDataService.fakeInstances;
            }
        }
        this.clients = this._fakeDataService.fakeClients;
        this.form = this._createForm();
    }

    onVersionSelection() {
        let version = this.form.value.version;
        /** TODO:
         * calculate impact on each instance
         * and set patchImpact property
         * which will be read by instancesComponent
         * and used to display patch impact
         */
        this.patchImpactOnSpaces = {
            altered: ["workspace 3", "workspace 4"],
            added: ["workspace 1", "workspace 2"],
            unaffected: ["workspace 5", "workspace 6"]
        };
    }

    onInstanceSelection(selected) {
        this.selectedInstances = selected;
    }

    /**
     * capture picker data and add to form data
     * has an output?
     */
    onDateChange($event) {
        this.patchDate = $event.value;
    }

    /** TODO ONLY FOR DEVELOPMENT */
    toggleNoInstancesView() {
        console.log("testing");
        if (this.instances.length) {
            this.instances = [];
            console.log(this.instances);
        } else {
            this.instances = this._fakeDataService.fakeInstances;
        }
    }

    /** onCreateNewInstanceClick()
     * close newPatchDialog
     * openNewDeployment dialog
     */
    onCreateNewInstanceClick() {
        this.dialog.open(NewDeploymentComponent, {
            data: { solution: this.solution }
        });
        this.patchDialog.close();
    }

    onSubmit() {
        delete this.form.value.environments; // true/false values
        this.form.value.selectedInstances = this.selectedInstances;
        this.form.value.date = this.patchDate;
        console.warn(this.form.value);
        console.warn(this.form.valid);
        this.patchDialog.close();
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: this.getConfirmationDialogData()
        });
    }

    /* ======================
     *  HELPER METHODS
     ======================= */

    private getConfirmationDialogData() {
        var today = new Date();
        var futureDate = this._addDays(today, 3);
        var reminder;
        if (this.patchDate >= futureDate) {
            reminder = `We'll also send a reminder 3 days before start time.`;
            console.log("set reminder", reminder);
        }
        var data = {
            title: "Confirm Patch",
            btn1Text: "Cancel",
            btn2Text: "Patch",
            snackBarCancelMessage: "Patch cancelled",
            snackBarConfirmMessage: "Patch has been scheduled",
            messages: [
                `${
                    this.selectedInstances.length
                } instance(s) will be patched with ${
                    this.solution.name
                } (add vNum and vNam)`,
                `Patching set for ${this.patchDate.toDateString()}. We'll send status emails to _____ when it starts and finishes. ${
                    reminder ? reminder : ""
                }`
            ]
        };
        console.log("before return", reminder);
        return data;
    }

    private _addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    get versionInput() {
        return this.form.get("version");
    }

    private _createForm() {
        let form = this._fb.group({
            solution: [this.solution.name, Validators.required],
            version: ["", Validators.required],
            instances: this._fb.array([]),
            notes: [""]
        });
        return form;
    }

    get notes() {
        return this.form.get("notes");
    }

    private _getMaxDate() {
        var d = new Date();
        var n = d.getFullYear() + 1;
        d.setFullYear(n);
        console.log(this.minDate, d);
        return d;
    }
}
