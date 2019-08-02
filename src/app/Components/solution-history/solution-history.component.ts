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
    @Input() queueTable?: boolean = false;
    temp = this.solution;

    // configure table
    filteredActions = [];
    dataSource;
    searchColumn: string[] = [""];
    @ViewChild(MatSortModule) sort: MatSortModule;
    displayedColumns: string[] = [
        "datetime",
        "action",
        "instance",
        "version",
        "status",
        "notes"
    ];

    constructor() {}

    // d.toUTCString();

    ngOnInit() {
        const now = new Date();
        if (this.queueTable) {
            this.solution.history.forEach((action) => {
                if(action.datetime >= now) {
                    action.datetime = action.datetime.toUTCString();
                    this.filteredActions.push(action);
                }
            });
        } else {
             this.solution.history.forEach((action) => {
                 if (action.datetime < now) {
                     action.datetime = action.datetime.toUTCString();
                     this.filteredActions.push(action);
                 }
             });
        }
        this.dataSource = new MatTableDataSource(this.filteredActions);
        console.log(this.dataSource)
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
