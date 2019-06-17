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
    solution;
    environments;
    selectedEnvs;
    selectedEnvsError: boolean = true;
    patchForm: FormGroup; // form model

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private _fb: FormBuilder,
        private _fakeDataService: FakeDataService
    ) {}

    ngOnInit() {

        this.solution = this._passedData.solution;
        this.environments = this._buildEnvArray(
            this._fakeDataService.fakeClients
        );

        this.patchForm = this._fb.group({
            solution: [this._passedData.solution.name, Validators.required],
            environments: this._addEnvControls(),
            description: [""]
        });
    }

    onSubmit() {
        delete this.patchForm.value.environments; // true/false values
        this.patchForm.value.selectedEnvs = this.selectedEnvs;
        console.warn(this.patchForm.value);
        console.warn(this.patchForm.valid);
    }

    // sync selected envs with selected checkbox controls
    syncItemsWithControls() {
        this.selectedEnvs = [];
        this.envControls.controls.forEach((ctrl, index) => {
            if (ctrl.value === true) {
                this.selectedEnvs.push(this.environments[index]);
            }
        });
        console.log(this.selectedEnvs);
        console.log(this.envControls);
        this.selectedEnvsError = this.selectedEnvs.length > 0 ? false : true;
    }

    // create access from html
    get envControls() {
        return <FormArray>this.patchForm.get("environments");
    }

    get description() {
        return this.patchForm.get("description");
    }

    // make one control for each env in this.environments
    private _addEnvControls() {
        const arr = this.environments.map((e) => {
            return this._fb.control(false);
        });
        return this._fb.array(arr);
    }

    private _buildEnvArray(clients) {
        let envs = [];
        clients.forEach((client) => {
            client.environments.forEach((e) => {
                envs.push(e);
            });
        });
        return envs;
    }
}
