import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";

@Component({
    selector: "app-solution-history",
    templateUrl: "./solution-history.component.html",
    styleUrls: ["./solution-history.component.css"]
})
export class SolutionHistoryComponent implements OnInit {
    @Input() solution;
    temp = this.solution;

    // configure table
    displayedColumns: string[] = ["datetime", "action", "instance", "version", "notes"];
    searchColumn: string[] = [""];
    dataSource;
    @ViewChild(MatSortModule) sort: MatSortModule;

    constructor() {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.solution.history);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
