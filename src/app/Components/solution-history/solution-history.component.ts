import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";

@Component({
    selector: "app-solution-history",
    templateUrl: "./solution-history.component.html",
    styleUrls: ["./solution-history.component.css"]
})
export class SolutionHistoryComponent implements OnInit {
    @Input() tasks;
    dataSource;
    searchColumn: string[] = [""];
    @ViewChild(MatSortModule) sort: MatSortModule;
    displayedColumns: string[] = [
        "task",
        "status",
        "instance",
        "version",
        "notes",
        "datetime"
    ];

    constructor() {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tasks);
        console.log(this.dataSource);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
