import { NewSolutionComponent } from "./../new-solution/new-solution.component";
import { PodioAssetsComponent } from "./../podio-assets/podio-assets.component";

import { Component, OnInit } from "@angular/core";
import {
    FakeDataService,
    IPodioOrganizationViewModel,
    IPodioAccountViewModel
} from "./../../services/fake-data.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-podio-account-detail",
    templateUrl: "./podio-account-detail.component.html",
    styleUrls: ["./podio-account-detail.component.css"]
})
export class PodioAccountDetailComponent implements OnInit {
    accountId: string;
    accounts: IPodioAccountViewModel[];
    account: IPodioAccountViewModel;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.accountId = this.route.snapshot.paramMap.get("id");
        this.accounts = this.fakeDataService.fakeAccounts;
        this.account = this._getAccountById();
        console.log(this.account);
    }

    private _getAccountById() {
        let account = this.accounts.find((acct) => acct.id === this.accountId);
        return account;
    }
}
