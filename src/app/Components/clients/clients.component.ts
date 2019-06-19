import { Component, OnInit, ViewChild } from "@angular/core";
import {
    FakeDataService,
    ISolutionViewModel
} from "./../../services/fake-data.service";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";

@Component({
    selector: "app-clients",
    templateUrl: "./clients.component.html",
    styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
    clients;

    // MATERIAL TABLE SETUP
    displayedColumns: string[] = ["contact", "company", "email", "environments", "notes"];
    @ViewChild(MatSortModule) sort: MatSortModule;
    dataSource;

    constructor(private fakeDataService: FakeDataService) {}

    ngOnInit() {
        this.clients = this.fakeDataService.fakeClients;
        this.dataSource = new MatTableDataSource(this.clients);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
