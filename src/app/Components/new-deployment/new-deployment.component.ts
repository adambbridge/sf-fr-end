import { environment } from "src/environments/environment.prod";
import { Solution } from "./../../../model/saasafras/solution";
import {
    FakeDataService,
    IPodioOrganizationViewModel
} from "src/app/services/fake-data.service";
import { Component, OnInit, Inject, Version } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "./../confirmation-dialog/confirmation-dialog.component";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";
import { routerNgProbeToken } from "@angular/router/src/router_module";
import { Router } from "@angular/router";
import { UtilsService } from "./../../services/utils.service";

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
    preselectedSolution;
    solutionTitle;
    preselectedOrg;
    orgTitle;
    clients;
    orgs: IPodioOrganizationViewModel[];
    instance;
    versions = [];

    deploymentForm = this.fb.group({
        solution: ["", Validators.required],
        version: ["", Validators.required],
        client: [""],
        org: ["", Validators.required],
        description: [""]
    });
    submitted: boolean = false;

    get c() {
        return this.deploymentForm.get("client");
    }
    get org() {
        return this.deploymentForm.get("org");
    }

    constructor(
        private fb: FormBuilder,
        private fakeDataService: FakeDataService,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        public deployDialog: MatDialogRef<NewDeploymentComponent>,
        private _utilsService: UtilsService,
        private dialog: MatDialog,
        private router: Router
    ) {}

    ngOnInit() {
        this._configurePreselections(this._passedData);
        this.clients = this.fakeDataService.fakeClients;
        this.versions = this._getVersionsFromSolutions();
    }

    private _getVersionsFromSolutions() {
        var solutions = this.fakeDataService.fakeSolutions;
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

    onClientSelection(): void {
        console.log(this.c.value);
        let userSelection = this.c.value;

        if (userSelection === "deployToSelf") {
            /** TODO get orgs of authenticated user */
            this.orgs = this.fakeDataService.fakeOrganizations;
        } else if (userSelection === "addClient") {
            this.deployDialog.close();
            this.router.navigate(["clients/new"]);
        } else {
            var selectedClient = userSelection;
            this.orgs = this._getClientOrgs(selectedClient);
        }
    }

    onCancelClick(): void {
        this.deployDialog.close("cancel");
        this._utilsService.openSnackBar("Deployment cancelled");
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

    toggleNoClientsView() {
        if (this.clients.length) {
            this.clients = [];
        } else {
            this.clients = this.fakeDataService.fakeClients;
        }
    }

    /** ==================
     * HELPER METHODS 
     ===================== */

    private _getClientOrgs(client) {
        var orgs = [];
        client.accounts.forEach((a) => {
            a.orgs.forEach((org) => {
                orgs.push(org);
            });
        });
        return orgs;
    }

    private getConfirmationDialogData() {
        let form = this.deploymentForm.value;
        let data = {
            title: "Create Instance?",
            btn1Text: "Cancel",
            btn2Text: "Create",
            snackBarCancelMessage: "Task cancelled",
            snackBarConfirmMessage: "Task scheduled",
            messages: [
                `A new instance of solution ${form.solution} version ${
                    form.version
                } will be created in org ${form.org.name}`,
                `This may take a few minutes. We'll email you when task completes.`
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
            this.deploymentForm.controls.org.setValue(data.org.name);
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
