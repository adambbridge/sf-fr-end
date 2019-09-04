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
import moment from "moment";

@Component({
    selector: "app-new-patch",
    templateUrl: "./new-patch.component.html",
    styleUrls: ["./new-patch.component.css"]
})
export class NewPatchComponent implements OnInit {
    solution;
    clients;
    instances;
    selectedInstances = [];
    instancePreselection: boolean = false;
    form: FormGroup;
    versions = [];
    patchImpactOnSpaces = null;
    minDate = new Date();
    maxDate = this._getMaxDate();
    patchDatetime;
    confirmationDialog;
    minTime: string;
    timeError: boolean = false;

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
        this.versions = this._getVersionsFromSolutions();
        this.clients = this._fakeDataService.fakeClients;
        this.form = this._createForm();
        this._setMinTime();
        console.log(this.form.value);
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

    onDateChange($event) {
        this.form.value.date = $event.value;
        console.log(this.form.value);
    }

    /** combine date and time chosen into single datetime moment */
    onTimeChange() {
        this._onTimeChangeHelper();
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

    onCreateNewInstanceClick() {
        this.dialog.open(NewDeploymentComponent, {
            data: { solution: this.solution }
        });
        this.patchDialog.close();
    }

    onCancelClick(): void {
        this.patchDialog.close("cancel");
        this._utilsService.openSnackBar("Patch cancelled");
    }

    onSubmit() {
        delete this.form.value.environments; // true/false values
        this.form.value.selectedInstances = this.selectedInstances;
        console.warn(this.form.value);
        console.warn(this.form.valid);
        // TODO call service to schedule patch
        // NOTE use form date value NOT time value
        this.patchDialog.close();
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: this.getConfirmationDialogData()
        });
    }

    /* ======================
     *  HELPER METHODS
     ======================= */

    private _getVersionsFromSolutions() {
        var solutions = this._fakeDataService.fakeSolutions;
        var versions = [];
        solutions.forEach((sol) => {
            let v = {
                number: sol.versionNumber,
                name: sol.versionName
            };
            versions.push(v);
        });
        console.log(versions);
        return versions;
    }

    private getConfirmationDialogData() {
        var patchDatetime = this.form.value.date;
        var userFriendlyDateTime = moment(patchDatetime).format("lll");
        var today = new Date();
        var futureDate = this._addDays(today, 3);
        var reminder;
        if (patchDatetime >= futureDate) {
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
                `Patching set for ${userFriendlyDateTime}. We'll send status emails to _____ when it starts and finishes. ${
                    reminder ? reminder : ""
                }`
            ]
        };
        console.log("before return", reminder);
        return data;
    }

    get versionInput() {
        return this.form.get("version");
    }

    private _createForm() {
        let form = this._fb.group({
            solution: [this.solution.name, Validators.required],
            version: ["", Validators.required],
            instances: this._fb.array([]),
            notes: [""],
            date: [new Date(), Validators.required],
            time: [""]
        });
        return form;
    }

    get notes() {
        return this.form.get("notes");
    }

    /* ======================
      TIME AND DATE HELPER METHODS
      TODO: refactor to use single datetime picker
      and moment so we can get rid of all this code
     ======================= */

    private _addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    private _getMaxDate() {
        var d = new Date();
        var n = d.getFullYear() + 1;
        d.setFullYear(n);
        return d;
    }

    /** create time string to set default and minimum time
     * for time picker. required format 'hr:min am/pm'
     * https://agranom.github.io/ngx-material-timepicker/
     */
    private _setMinTime() {
        let now = new Date();
        let rawHr = now.getHours();
        let rawMin = now.getMinutes();
        let min = rawMin.toString().length === 1 ? "0" + rawMin : rawMin;
        let hr = rawHr > 12 ? rawHr - 12 : rawHr;
        let suffix = rawHr >= 12 ? "pm" : "am";
        let minTime = hr + ":" + min + " " + suffix;
        this.minTime = minTime;
    }

    private _onTimeChangeHelper() {
        // values from both date and time pickers
        var d = this.form.value.date;
        var t = this.form.value.time; // "HH:mm pm"
        var dateMoment = moment(d);

        // get hr, min, suffix (am or pm)
        var HHmm = t.split(" ")[0]; // "HH:mm"
        var hr = HHmm.split(":")[0]; // "HH"
        var min = HHmm.split(":")[1]; // "mm"
        var suffix = t.split(" ")[1]; // am or pm

        // convert hr from 12 hr to 24 hr format
        if (suffix.includes("pm")) {
            hr = parseInt(hr) + 12;
        }

        // use hr and min to set time on the date
        var dateTimeCombinedNativeDateObject = dateMoment
            .set("hour", hr)
            .set("minute", min)
            .toDate();
        this.form.controls.date.setValue(dateTimeCombinedNativeDateObject);

        // if time in past show error message and disable submit btn
        if (dateTimeCombinedNativeDateObject < new Date()) {
            this.timeError = true;
        } else {
            this.timeError = false;
        }
        console.log(this.form.value);
    }
}
