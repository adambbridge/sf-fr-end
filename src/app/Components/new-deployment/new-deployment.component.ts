import { Solution } from "./../../../model/saasafras/solution";
import { environment } from "./../../../environments/environment.prod";
import { FakeDataService } from "src/app/services/fake-data.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

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
    //TODO these would be solution properties?
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
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private fb: FormBuilder,
        private fakeDataService: FakeDataService
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
    }

    /** ==================
     * HELPER METHODS 
     ===================== */

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
                this.getFirstFourChars(data.org.owner)
            );
        }
    }

    getFirstFourChars(string) {
        return string
            .replace(/\s/g, "")
            .toUpperCase()
            .substring(0, 4);
    }
}
