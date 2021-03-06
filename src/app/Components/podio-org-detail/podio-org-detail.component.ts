import { NewSolutionComponent } from "./../new-solution/new-solution.component";
import { Component, OnInit } from "@angular/core";
import {
    FakeDataService,
    IPodioOrganizationViewModel
} from "./../../services/fake-data.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-podio-org-detail",
    templateUrl: "./podio-org-detail.component.html",
    styleUrls: ["./podio-org-detail.component.css"]
})
export class PodioOrgDetailComponent implements OnInit {
    orgId;
    orgs: IPodioOrganizationViewModel[];
    org: IPodioOrganizationViewModel;
    selectedWorkspaces = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.orgId = this.route.snapshot.paramMap.get("id");
        this.orgs = this.fakeDataService.fakeOrganizations;
        this.org = this.orgs.find((o) => {
            return o.orgId == this.orgId;
        });
        console.log("org", this.org);
        console.log("orgs", this.orgs);
    }

    onSpaceSelection(selected) {
        this.selectedWorkspaces = selected;
        console.log("selected", this.selectedWorkspaces);
    }

    onCreateSolClick() {
        this.dialog.open(NewSolutionComponent, {
            data: {
                org: this.org,
                workspaces: this.selectedWorkspaces
            }
        });
    }
}
