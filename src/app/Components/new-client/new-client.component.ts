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

    constructor(
        private _fb: FormBuilder,
        private fakeDataService: FakeDataService,
        private _utilsService: UtilsService,
        private router: Router
    ) {}

    ngOnInit() {
        this._createNewClientForm();
    }

    onSubmit() {
        this.submitted = true;
        console.log("form value:", this.newClientForm.value);
        console.log("form value:", this.newClientForm.valid);
        // if succesfully create new client...
        this._utilsService.openSnackBar("triggered this from onSubmit");
        this.router.navigate(['/clients']);
    }

    /*=========================
            HELPERS
     =========================*/

    private _createNewClientForm() {
        this.newClientForm = this._fb.group({
            contact: ["", Validators.required],
            company: [""],
            email: ["", Validators.required],
            notes: [""]
        });
    }
}
