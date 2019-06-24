import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FakeDataService } from "src/app/services/fake-data.service";

@Component({
    selector: "app-add-environment",
    templateUrl: "./add-environment.component.html",
    styleUrls: ["./add-environment.component.css"]
})
export class AddEnvironmentComponent implements OnInit {
    loginForm: FormGroup;
    availableEnvs;
    showContent = false;

    constructor(
        private _fakeDataService: FakeDataService,
        private _fb: FormBuilder
    ) {}

    ngOnInit() {
        this.loginForm = this._createForm();
        this.availableEnvs = ["BB Consulting", "XYZ Real Estate"];
    }

    onSubmit() {
        // delete this.form.value.environments; // true/false values
        // this.form.value.selectedEnvs = this.selectedEnvs;
        // console.warn(this.form.value);
        // console.warn(this.form.valid);
        // this._utilsService.openSnackBar(
        //     "message triggered inside onSubmit",
        //     "some action",
        //     4000
        // );
    }

    private _createForm() {
        let form = this._fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        return form;
    }

    onHeaderClick() {
        this.showContent = true;
    }
}
