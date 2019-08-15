import { INewClientFormSubmission } from './../../services/fake-data.service';
import { MatDialog } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";
import { AddKnownOrgComponent } from "../add-known-org/add-known-org.component";
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter
} from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { UtilsService } from "./../../services/utils.service";
import {
    FakeDataService,
    IClientViewModel
} from "src/app/services/fake-data.service";

@Component({
    selector: "app-new-client",
    templateUrl: "./new-client.component.html",
    styleUrls: ["./new-client.component.css"]
})
export class NewClientComponent implements OnInit {
    newClientForm: FormGroup;
    submitted = false;
    orgs;

    constructor(
        private _fb: FormBuilder,
        private fakeDataService: FakeDataService,
        private _utilsService: UtilsService,
        private router: Router,
        private dialog: MatDialog,
    ) {}

    ngOnInit() {
        this._createNewClientForm();
    }

    /** open dialog and setup a subscription to it's afterClosed lifecycle event */
    onAddOrgClick() {
        const dialogRef = this.dialog.open(AddKnownOrgComponent, {
            data: { addToClient: true }
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log("d closed, received: ", result);
            this.orgs = result;
        });
    }

    onSubmit() {
        this.submitted = true;
        this.newClientForm.value.orgs = this.orgs;
        console.log("form value:", this.newClientForm.value);
        console.log("form value:", this.newClientForm.valid);

        // call service
        // TODO add async code...
        let newClientsArray = this.fakeDataService.newClient(this.newClientForm.value);

        // if success
        this._utilsService.openSnackBar("New client added");
        this.router.navigate(["/clients"]);
    }

    /*=========================
            HELPERS
     =========================*/

    private _createNewClientForm() {
        this.newClientForm = this._fb.group({
            contact: ["", Validators.required],
            company: [""],
            email: ["", Validators.required],
            notes: [""],
            orgs: [""]
        });
    }
}
