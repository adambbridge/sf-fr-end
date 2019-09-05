import { NewClientConfirmationComponent } from "./../new-client-confirmation/new-client-confirmation.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { UtilsService } from "./../../services/utils.service";
import { FakeDataService } from "src/app/services/fake-data.service";
import { MatDialog } from "@angular/material";

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
        private router: Router,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this._createForm();
    }

    onSubmit() {
        this.submitted = true;
        console.log("form value:", this.newClientForm.value);
        console.log("form value:", this.newClientForm.valid);
        var newClient = this.fakeDataService.newClient(
            this.newClientForm.value
        );
        console.log(newClient);
        /** TODO on successfully creating client do the rest... */
        const confirmDialog = this.dialog.open(NewClientConfirmationComponent, {
            data: { client: newClient }
        });
        this.router.navigate(["/clients/", newClient.id]);
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
