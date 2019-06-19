import { UtilsService } from "./../../services/utils.service";
import { Component, OnInit, Inject, ViewChild } from "@angular/core";
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
    clients;
    environments;
    form: FormGroup;
    selectedEnvs = [];
    selectedEnvsError: boolean = true;
    @ViewChild("envs") envs;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private _fb: FormBuilder,
        private _fakeDataService: FakeDataService,
        private _utilsService: UtilsService
    ) {}

    ngOnInit() {
        this.solution = this._passedData.solution;
        this.clients = this._fakeDataService.fakeClients;
        this.environments = this._buildEnvArray(this.clients);
        this.form = this._createForm();
    }

    onEnvSelection() {
        this.selectedEnvs = this.envs.selectedOptions.selected.map(
            (option) => option.value
        );
    }

    onSubmit() {
        delete this.form.value.environments; // true/false values
        this.form.value.selectedEnvs = this.selectedEnvs;
        console.warn(this.form.value);
        console.warn(this.form.valid);
        this._utilsService.openSnackBar('message triggered inside onSubmit', 'some action', 4000);
    }

    /************************
     *  HELPER METHODS
     ************************/

    private _buildEnvArray(clients) {
        let envs = [];
        clients.forEach((client) => {
            client.environments.forEach((e) => {
                envs.push(e);
            });
        });
        return envs;
    }

    private _createForm() {
        let form = this._fb.group({
            solution: [this._passedData.solution.name, Validators.required],
            environments: this._fb.array([]),
            description: [""]
        });
        return form;
    }

    get envControls() {
        return <FormArray>this.form.get("environments");
    }

    get description() {
        return this.form.get("description");
    }

}
