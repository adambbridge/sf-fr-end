import { UtilsService } from "./../../services/utils.service";
import {
    FakeDataService,
    IAuthenticatedSfUser
} from "src/app/services/fake-data.service";
import { IClientViewModel } from "src/app/services/fake-data.service";
import { Component, OnInit, Inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "app-add-account",
    templateUrl: "./add-account.component.html",
    styleUrls: ["./add-account.component.css"]
})
export class AddAccountComponent implements OnInit {
    logOutUrl: SafeUrl;
    passedClient?: IClientViewModel;
    clients: IClientViewModel[];
    fakeSfUser: IAuthenticatedSfUser;
    alternativeEmail: string;
    form: FormGroup;

    constructor(
        private _authService: AuthService,
        private dom: DomSanitizer,
        private fb: FormBuilder,
        public addAccountDialog: MatDialogRef<AddAccountComponent>,
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private _fakeDataService: FakeDataService,
        private _utilsService: UtilsService
    ) {}

    ngOnInit() {
        this._createForm();
        this._configureClientOptions();
        this.fakeSfUser = this._fakeDataService.fakeAuthenticatedSfUser;
        console.log(this.form.value);
    }

    onClientSelection(selectedClient) {
        this.form.controls.email.setValue(selectedClient.email);
    }

    get client() {
        return this.form.get("client").value;
    }

    get accountName() {
        return this.form.get("accountName").value;
    }

    onCancelClick(): void {
        this.addAccountDialog.close("cancel");
    }

    onSubmit() {
        /** TODO: SEND REQUEST EMAIL & tell user request was sent */
        this._utilsService.openSnackBar("Request sent");
        console.log(this.form.value);
        console.log(this.form.valid);
        this.addAccountDialog.close("add");

        // logout current sf user from podio. doesnt log them out of sf
        // this.logOutUrl = this.dom.bypassSecurityTrustResourceUrl(
        //     "https://podio.com/logout"
        // );
        // setTimeout(() => {
        //     this._authService.loginEnvironmentServiceAccount(
        //         this.form.value.clientId,
        //         this.form.value.accountName
        //     );
        // }, 1000);
    }

    /** ======================
     * PRIVATE METHODS
     * ======================= */

    private _createForm() {
        this.form = this.fb.group({
            client: ["", Validators.required],
            accountName: ["", Validators.required],
            email: ["", Validators.required]
        });
    }

    private _configureClientOptions() {
        if (this._passedData.client) {
            this.passedClient = this._passedData.client;
            this.form.controls.client.setValue(this.passedClient);
            this.form.controls.email.setValue(this.passedClient.email);
        } else {
            this.clients = this._fakeDataService.fakeClients;
        }
    }
}
