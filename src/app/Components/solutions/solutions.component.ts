import { FakeDataService } from './../../services/fake-data.service';
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
    solutions = this.fakeDataService.fakeSolutions;

    // MATERIAL TABLE SETUP
    displayedColumns: string[] = [
        "name",
        "version",
        "workspaces",
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
        private _solutionService: SaasafrasService,
        private fakeDataService: FakeDataService
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
        // this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    toggleNewSolution(show: boolean) {
        console.log("settings showNewSolution to: " + show);
        this.showNewSolution = show;
        this.showNewIcon = show ? "expand_less" : "expand_more";
    }

  
}
