import { IClientViewModel } from 'src/app/services/fake-data.service';
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
    client?: IClientViewModel;

    form = this.fb.group({
        clientId: ["", Validators.required],
        accountName: ["", Validators.required]
    });

    constructor(
        private _authService: AuthService,
        private dom: DomSanitizer,
        private fb: FormBuilder,
        public addAccountDialog: MatDialogRef<AddAccountComponent>,
        @Inject(MAT_DIALOG_DATA) private _passedData: any
    ) {}

    ngOnInit() {
        this.client = this._passedData.client
    }

    onCancelClick(): void {
        console.log("clicked cancel");
        this.addAccountDialog.close("cancel");
    }

    onSubmit() {
        // logout current sf user from podio. doesnt log them out of sf
        this.logOutUrl = this.dom.bypassSecurityTrustResourceUrl(
            "https://podio.com/logout"
        );

        setTimeout(() => {
            this._authService.loginEnvironmentServiceAccount(
                this.form.value.clientId,
                this.form.value.accountName
            );
        }, 1000);

        this.addAccountDialog.close("add");
    }
}
    
