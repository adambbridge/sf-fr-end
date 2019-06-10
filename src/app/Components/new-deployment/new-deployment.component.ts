import { environment } from './../../../environments/environment.prod';
import { FakeDataService } from 'src/app/services/fake-data.service';
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
 *
 * add a model for deployment per:
 * https://malcoded.com/posts/angular-fundamentals-reactive-forms/
 *
 * Use EventEmitter to keep the form encapsulated and to provide the form value outside the component per: Angular docs
 *
 * assign form data to another object so we dont mess with the form data once its been captured in onSubmit per
 *  https://malcoded.com/posts/angular-fundamentals-reactive-forms/
 *
 * set value of solution as the id property but display the name property
 */
export class NewDeploymentComponent implements OnInit {
    clients;
    environments;

    deploymentForm = this.fb.group({
        solution: ["", Validators.required],
        client: ["", Validators.required],
        environment: ["", Validators.required],
        description: [""]
    });

    // provide access for validation purposes
    get c() { return this.deploymentForm.get('client')};
    get env() { return this.deploymentForm.get('environment')};

    constructor(
        @Inject(MAT_DIALOG_DATA) private passedData: any,
        private fb: FormBuilder,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.clients = this.fakeDataService.fakeClients;
        this.deploymentForm.controls.solution.setValue(
            this.passedData.solution.name
        );
    }

    onClientSelection(selectedClientID): void {
        let selectedClientObject = this.clients.find(
            (client) => client.id === selectedClientID
        );
        this.environments = selectedClientObject.environments;
        // console.log(JSON.stringify(this.environments));
    }

    onSubmit() {
        // console.warn(this.deploymentForm.value);
        // console.warn(this.deploymentForm.valid);
    }
}
