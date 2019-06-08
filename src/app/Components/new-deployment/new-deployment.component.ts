import { environment } from './../../../environments/environment.prod';
import { FakeDataService } from 'src/app/services/fake-data.service';
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";


@Component({
    selector: "app-new-deployment",
    templateUrl: "./new-deployment.component.html",
    styleUrls: ["./new-deployment.component.css"]
})
export class NewDeploymentComponent implements OnInit {
    /**
     * TODO:
     * add a model for deployment per:
     * https://malcoded.com/posts/angular-fundamentals-reactive-forms/
     *
     * NOTE:
     * this component uses Reactive Forms
     *
     * TODO
     * Use EventEmitter to keep the form encapsulated and to provide the form value outside the component per: Angular docs
     *
     * TODO: assign form data to another object so we dont mess with the form data once its been captured in onSubmit per
     *  https://malcoded.com/posts/angular-fundamentals-reactive-forms/
     *
     */

    // data for populating select inputs
    // 1. define props
    // 2. init with data to populate selector
    // 3. when 1 is selected the model is updated
    // TODO !!!!!! HOW TO HOOK IN HERE?????
    // 4. when updated, chnage event handler sets allClientEnvs
    // 5. this populates env selector
    clients;
    environments;

    // form model
    deploymentForm = this.fb.group({
        client: ["", Validators.required],
        environment: ["", Validators.required],
        description: [""]
    });

    // get stored data passed by open method from angular material
    constructor(
        @Inject(MAT_DIALOG_DATA) private passedData: any,
        private fb: FormBuilder,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
       this.clients = this.fakeDataService.fakeClients;
    }

    onClientSelection(selectedClientID): void {
        console.log(selectedClientID)
        // let selectedClientID = this.deploymentForm.get('client').value;
        let selectedClientObject = this.clients.find(client => client.id === selectedClientID);
        this.environments = selectedClientObject.environments;
        console.log(JSON.stringify(this.environments))
    }

    onSubmit() {
        console.warn(this.deploymentForm.value.client.name );
        console.warn(this.deploymentForm.valid);
    }
}
