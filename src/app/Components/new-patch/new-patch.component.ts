import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FakeDataService } from "src/app/services/fake-data.service";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: "app-new-patch",
    templateUrl: "./new-patch.component.html",
    styleUrls: ["./new-patch.component.css"]
})

/**
 * TODO ??? need send client and env for each env? or use env unique id?
 *
 */
export class NewPatchComponent implements OnInit {
    environments;
    patchForm: FormGroup; // form model

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private _fb: FormBuilder,
        private _fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.environments = this._getEnvs(this._fakeDataService.fakeClients);
        console.log("envs: ", this.environments);

        this.patchForm = this._fb.group({
            solution: ["", Validators.required],
            environments: this._addEnvControls(),
            description: [""]
        });

        this.patchForm.controls.solution.setValue(
            this._passedData.solution.name
        );
    }

    onSubmit() {
        console.warn(this.patchForm.value);
        console.warn(this.patchForm.valid);
    }

    // create access from html
    get envControls() {
        return <FormArray>this.patchForm.get("environments");
    }

    // make one control for each env in this.environments
    private _addEnvControls() {
        const arr = this.environments.map((e) => {
            return this._fb.control(false);
        });
        return this._fb.array(arr);
    }

    private _getEnvs(clients) {
        // iterate, return
        let envs = [];
        clients.forEach((client) => {
            client.environments.forEach((e) => {
                envs.push(e);
            });
        });
        return envs;
    }
}
