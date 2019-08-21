import { PodioAssetsComponent } from './../podio-assets/podio-assets.component';
import { AddKnownOrgComponent } from "../add-known-org/add-known-org.component";
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
    envUI: string = "oneTable";

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get("id");
        this.clients = this.fakeDataService.fakeClients;
        this.client = this.clients.find(c => c.id === this.id);

        console.log("client", this.client);
        console.log("clients", this.clients);
    }

    // applyFilter(filterValue: string) {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    // }

   
}
