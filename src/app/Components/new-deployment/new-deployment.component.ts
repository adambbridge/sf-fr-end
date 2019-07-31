import { environment } from 'src/environments/environment.prod';
import { Solution } from "./../../../model/saasafras/solution";
import { FakeDataService } from "src/app/services/fake-data.service";
import { Component, OnInit, Inject, Version } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "./../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-new-deployment",
    templateUrl: "./new-deployment.component.html",
    styleUrls: ["./new-deployment.component.css"]
})

/**
 * TODO:
 * add a model for deployment per: https://malcoded.com/posts/angular-fundamentals-reactive-forms/
 * Use EventEmitter to keep the form encapsulated and to provide the form value outside the component per: Angular docs
 * assign form data to another object so we dont mess with the form data once its been captured in onSubmit per https://malcoded.com/posts/angular-fundamentals-reactive-forms/
 * set value of solution as the id property but display the name property
 */
export class NewDeploymentComponent implements OnInit {
    solutions;
    preselectedSolution;
    solutionTitle;
    preselectedOrg;
    orgTitle;
    clients;
    environments;
    instance;
    versions = [1, 2, "KYdev1", "KYdev2", "KYqa1"];

    deploymentForm = this.fb.group({
        solution: ["", Validators.required],
        version: ["", Validators.required],
        client: [""],
        environment: ["", Validators.required],
        instance: ["", Validators.required],
        description: [""]
    });
    submitted: boolean = false;


    get c() {
        return this.deploymentForm.get("client");
    }
    get env() {
        return this.deploymentForm.get("environment");
    }

    constructor(
        private fb: FormBuilder,
        private fakeDataService: FakeDataService,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        public deployDialog: MatDialogRef<NewDeploymentComponent>,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this._configurePreselections(this._passedData);
        this.clients = this.fakeDataService.fakeClients;
        this.solutions = this.fakeDataService.fakeSolutions;
    }

    onClientSelection(selectedClientID): void {
        let client = this.clients.find((c) => c.id === selectedClientID);
        this.environments = client.environments;
        this.deploymentForm.controls.instance.setValue(client.identifier);
        this.instance = client.identifier;
    }

    onSubmit() {
        this.submitted = true;
        console.warn(this.deploymentForm.value);
        console.warn(this.deploymentForm.valid);
        this.deployDialog.close();
        const confirmDialog = this.dialog.open(ConfirmationDialogComponent, {
            data: this.getConfirmationDialogData()
        });
    }

    /** ==================
     * HELPER METHODS 
     ===================== */

    private getConfirmationDialogData() {
        let form = this.deploymentForm.value;
        let sol = form.solution;
        let ver = form.version;
        let org = form.environment.name;

        let data = {
            title: "Create Solution?",
            btn1Text: "Cancel",
            btn2Text: "Create",
            snackBarCancelMessage: "Task cancelled",
            snackBarConfirmMessage: "Task scheduled",
            messages: [
                `A new instance of solution ${sol} version ${ver} will be created in org ${org}`
            ]
        };
        return data;
    }

    private _configurePreselections(data) {
        console.log("preselected data", data);
        if (data.solution) {
            this.preselectedSolution = data.solution.name;
            this.solutionTitle = data.solution.name;
            console.log(this.preselectedSolution);
            this.deploymentForm.controls.solution.setValue(data.solution.name);
        }
        if (data.org) {
            this.preselectedOrg = data.org.name;
            this.orgTitle = data.org.name;
            console.log(this.preselectedOrg);
            this.deploymentForm.controls.environment.setValue(data.org.name);
            this.deploymentForm.controls.instance.setValue(
                this._generateInstanceNameFromClientName(data.org.owner)
            );
        }
    }

    // TODO THIS WON'T BE USED HERE WHEN WE HAVE DATA WHERE A CLIENT/ONWER HAS AN IDENTIFIER PROPERTY
    // WE'LL USE SOMETHING LIKE THIS TO GENERATE THE IDENTIFIER WHEN WE CREATE A CLIENT
    private _generateInstanceNameFromClientName(clientName) {
        return clientName
            .replace(/\s/g, "")
            .toUpperCase()
            .substring(0, 4);
    }
}
