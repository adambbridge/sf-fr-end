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
    instances;
    form: FormGroup;
    submitted: boolean = false;
    selectedEnvs = [];
    selectedEnvsError: boolean = true;
    @ViewChild("envs") envs;
    //TODO these would be solution properties?
    versions = [1, 2, "KYdev1", "KYdev2", "KYqa1"];
    patchImpactOnSpaces = null;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private _fb: FormBuilder,
        private _fakeDataService: FakeDataService,
        private _utilsService: UtilsService
    ) {}

    ngOnInit() {
        this.solution = this._passedData.solution;
        this.clients = this._fakeDataService.fakeClients;
        this.instances = this._fakeDataService.fakeInstances;
        this.environments = this._buildEnvArray(this.clients);
        this.form = this._createForm();
    }

    onEnvSelection() {
        this.selectedEnvs = this.envs.selectedOptions.selected.map(
            (option) => option.value
        );
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

    onSubmit() {
        delete this.form.value.environments; // true/false values
        this.form.value.selectedEnvs = this.selectedEnvs;
        console.warn(this.form.value);
        console.warn(this.form.valid);
        this.submitted = true;
        this._utilsService.openSnackBar(
            "message triggered inside onSubmit",
            "some action",
            4000
        );
    }

    /************************
     *  HELPER METHODS
     ************************/

    get versionInput() {
        return this.form.get("version");
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

    private _createForm() {
        let form = this._fb.group({
            solution: [this._passedData.solution.name, Validators.required],
            version: ["", Validators.required],
            environments: this._fb.array([]),
            notes: [""]
        });
        return form;
    }

    get envControls() {
        return <FormArray>this.form.get("environments");
    }

    get notes() {
        return this.form.get("notes");
    }
}
