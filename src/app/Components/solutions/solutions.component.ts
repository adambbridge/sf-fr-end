import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { SaasafrasService } from "../../services/saasafras.service";
import { Solutions, Solution } from "src/model/saasafras/solution";
import { Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";

@Component({
    selector: "app-solutions",
    templateUrl: "./solutions.component.html",
    styleUrls: ["./solutions.component.css"]
})
export class SolutionsComponent implements OnInit {
    // TODO REMOVED Solution type enforcement
    // as Application is recursive
    solutions = this.getFakeData();

    // MATERIAL TABLE SETUP
    displayedColumns: string[] = [
        "action",
        "name",
        "version",
        "creationDate",
        "lastUpdateDate",
        "description"
    ];
    dataSource = new MatTableDataSource(this.solutions);
    @ViewChild(MatSortModule) sort: MatSortModule;

    newSolution = new Solution(null, "New Solution", "0.0", null);
    showNewSolution: boolean;
    showNewIcon = "expand_more";

    mySolutions: Observable<Solutions>;

    constructor(
        private _authService: AuthService,
        private _solutionService: SaasafrasService
    ) {
        // TODO GET REAL DATA
        // this.mySolutions = this._solutionService.GetSolutions();
        // this.mySolutions.subscribe({
        //     next: (s: Solutions) => {
        //         this.solutions = s.solutions;
        //         //  this.solutions.unshift(this.newSolution); // optionally add a new solution to the top
        //     }
        // });
    }

    ngOnInit() {
        // TODO SORT NOT WORKING
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    toggleNewSolution(show: boolean) {
        console.log("settings showNewSolution to: " + show);
        this.showNewSolution = show;
        this.showNewIcon = show ? "expand_less" : "expand_more";
    }

    getFakeData() {
        const fakeApplication = {
            appId: 123,
            appName: "foo",
            podioApplication: {
                appId: 123,
                appName: "foo",
                podioApplication: "cant recurse here",
                fields: ["foo", "bar"]
            },
            fields: ["foo", "bar"]
        };
        const fakeWorkspace = {
            workspaceName: "Workspace 1",
            workspaceId: 123,
            apps: [fakeApplication],
            podioSpace: {
                // strings
                org_id: "123",
                space_id: "123",
                name: "podio space",
                rights: ["foo", "bar"],
                role: "role",
                type: "type",
                url: "https://someurl.com",
                url_label: "url label",
                privacy: "privacy",
                created_on: new Date(),
                description: "description",
                created_by: "any",
                // type Owner
                owner: { id: "123", type: "type" },
                // booleans
                premium: false,
                post_on_new_app: false,
                post_on_new_member: false,
                auto_join: false,
                is_overdue: false
            }
        };

        const fakeSolutions = [
            {
                action: "action",
                name: "sol 1 ",
                version: 1,
                creationDate: new Date("2015-05-05"),
                lastUpdateDate: new Date(),
                description: "my lollipop"
            },
            {
                action: "action",
                name: "sol 2",
                version: 2,
                creationDate: new Date("2017-05-05"),
                lastUpdateDate: new Date(),
                description: "my ice cream"
            },
            {
                action: "action",
                name: "sol 3",
                version: 1,
                creationDate: new Date("2016-05-05"),
                lastUpdateDate: new Date(),
                description: "my burger"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my pizza"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my roasted pig"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            },
            {
                action: "action",
                name: "sol 4",
                version: 4,
                creationDate: new Date("2018-05-05"),
                lastUpdateDate: new Date(),
                description: "my description"
            }
        ];

        return fakeSolutions;
    }
}

/**
 * MODELS:
 *
 * 
 * export class Solution {
    constructor(
        public appId: string,
        public name: string,
        public version: string,
        public workspaces: $Space[]) { }
}

export class $Space {
    constructor(
        public workspaceName: string,
        public workspaceId: Number,
        public podioSpace: Space,
        public apps: $Application[]) { }
}

export class Space {
    public org_id: string;
    public space_id: string;
    public name: string;
    public rights: string[];
    public role: string;
    public type: string;
    public url: string;
    public url_label: string;
    public privacy: string;
    public premium: boolean;
    public post_on_new_app: boolean;
    public post_on_new_member: boolean;
    public auto_join: boolean;
    public created_on: string;
    public description: string;
    public is_overdue: boolean;
    public created_by: any;
    public owner: Owner;
}

export class Owner {
    public id: string;
    public type: string;
}

 */
