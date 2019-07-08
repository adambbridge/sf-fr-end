import { Component, OnInit } from '@angular/core';
import {
    FakeDataService,
    IPodioOrganizationViewModel

} from "./../../services/fake-data.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "app-podio-org-detail",
    templateUrl: "./podio-org-detail.component.html",
    styleUrls: ["./podio-org-detail.component.css"]
})
export class PodioOrgDetailComponent implements OnInit {
    orgs;
    org;
    orgId;
    

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.orgId = this.route.snapshot.paramMap.get("id");
        
        this.orgs = this.fakeDataService.fakeOrganizations;
        // this.orgs.forEach((org) => {
        //     if (org.orgId === this.orgId) {
        //         this.org = org;
        //         console.log('org in foreach', org);
        //         console.log('this.org', this.org)
        //     }
        // });
        this.org = this.orgs[0];

        console.log("org", this.org);
        console.log("orgs", this.orgs);
    }

    onSpaceSelection($event) {
        console.log("event recd:", $event);
    }
}
