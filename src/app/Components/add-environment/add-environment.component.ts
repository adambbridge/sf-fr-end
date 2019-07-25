import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { FakeDataService, IPodioOrganizationViewModel } from "src/app/services/fake-data.service";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-add-environment",
    templateUrl: "./add-environment.component.html",
    styleUrls: ["./add-environment.component.css"]
})
export class AddEnvironmentComponent implements OnInit {
    loginForm: FormGroup;
    availableEnvs;
    showContent = false;
    @ViewChild("envs") envs;
    selectedOrgs: IPodioOrganizationViewModel[] = [];

    constructor(
        private _fakeDataService: FakeDataService,
        private _fb: FormBuilder,
        public dialogRef: MatDialogRef<AddEnvironmentComponent>
    ) {}

    ngOnInit() {
        this.loginForm = this._createForm();
        this.availableEnvs = this._fakeDataService.fakeOrganizations;
    }

    onOrgSelection() {
        this.selectedOrgs = this.envs.selectedOptions.selected.map(
            (option) => option.value
        );
        console.log(this.selectedOrgs);
    }

    onCancelClick(): void {
        console.log('clicked cancel')
        this.dialogRef.close();
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

    onHeaderClick() {
        this.showContent = true;
    }

    private _createForm() {
        let form = this._fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
        return form;
    }
}
