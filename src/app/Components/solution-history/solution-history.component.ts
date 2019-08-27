import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
    selector: "app-solution-history",
    templateUrl: "./solution-history.component.html",
    styleUrls: ["./solution-history.component.css"]
})
export class SolutionHistoryComponent implements OnInit {
    @Input() tasks;
    @Input() showSolutionColumn: boolean = false;
    dataSource;
    displayedColumns: string[];
    @ViewChild(MatSortModule) sort: MatSortModule;
    @ViewChild(MatPaginator) taskPaginator: MatPaginator;

    constructor() {}

    ngOnInit() {
        this.displayedColumns = [
            "task",
            "target",
            "version",
            "status",
            "notes"
        ];
        if(this.showSolutionColumn) {
            this.displayedColumns.unshift("solution");
        }
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.taskPaginator;
        console.log(this.dataSource);
        console.log(this.taskPaginator);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
