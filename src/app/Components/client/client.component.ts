import { AddEnvironmentComponent } from './../add-environment/add-environment.component';
import {
    FakeDataService,
    IClientViewModel
} from "./../../services/fake-data.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-client",
    templateUrl: "./client.component.html",
    styleUrls: ["./client.component.css"]
})
export class ClientComponent implements OnInit {
    id;
    client: IClientViewModel;
    clients: IClientViewModel[];

    // MATERIAL TABLE SETUP
    displayedColumns: string[] = ["org", "owner", "solution", "actions"];
    @ViewChild(MatSortModule) sort: MatSortModule;
    dataSource;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.clients = this.fakeDataService.fakeClients;
        this.clients.forEach((client) => {
            if (client.id === this.id) {
                this.client = client;
            }
        });
        this.dataSource = new MatTableDataSource(this.client.environments);

        console.log("client", this.client);
        console.log("clients", this.clients);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onAddEnvClick() {
        this.dialog.open(AddEnvironmentComponent, {
        });
    }
}
