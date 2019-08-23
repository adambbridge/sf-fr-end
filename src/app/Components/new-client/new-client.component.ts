import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { UtilsService } from "./../../services/utils.service";
import { FakeDataService } from "src/app/services/fake-data.service";

@Component({
    selector: "app-new-client",
    templateUrl: "./new-client.component.html",
    styleUrls: ["./new-client.component.css"]
})
export class NewClientComponent implements OnInit {
    newClientForm: FormGroup;
    submitted: boolean = false;

    constructor(
        private _fb: FormBuilder,
        private fakeDataService: FakeDataService,
        private _utilsService: UtilsService,
        private router: Router
    ) {}

    ngOnInit() {
        this._createForm();
    }

    onSubmit() {
        this.submitted = true;
        console.log("form value:", this.newClientForm.value);
        console.log("form value:", this.newClientForm.valid);

        let newClientsArray = this.fakeDataService.newClient(
            this.newClientForm.value
        );

        // on success
        this._utilsService.openSnackBar("New client added");
        this.router.navigate(["/clients"]);
    }

    /*=========================
            HELPERS
     =========================*/

    private _createForm() {
        this.newClientForm = this._fb.group({
            contact: ["", Validators.required],
            company: [""],
            email: ["", Validators.required],
            notes: [""]
        });
    }
}
