import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import {
    IPodioAccountViewModel,
    IPodioOrganizationViewModel
} from "src/app/services/fake-data.service";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: "app-onboarding-slideshow",
    templateUrl: "./onboarding-slideshow.component.html",
    styleUrls: ["./onboarding-slideshow.component.css"]
})
export class OnboardingSlideshowComponent implements OnInit {
    accounts: IPodioAccountViewModel[];
    orgs: IPodioOrganizationViewModel[];
    @Output() introStart = new EventEmitter();

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        public dialog: MatDialogRef<OnboardingSlideshowComponent>
    ) {}

    ngOnInit() {
        this.accounts = this._passedData.accounts;
        this.orgs = this.accounts[1].orgs;
        console.log(this.accounts);
        console.log(this.orgs[0].spaces)
    }

    closeDialog(nextAction) {
        this.dialog.close(nextAction);
        // if (nextAction === "tour") {
        //     console.log(nextAction)
        //     this.introStart.emit('tour');
        // }
    }
}
