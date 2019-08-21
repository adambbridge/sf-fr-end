import { AddAccountComponent } from './../add-account/add-account.component';
import {
    FakeDataService,
    IClientViewModel
} from "./../../services/fake-data.service";
import {
    Component,
    OnInit,
    Input,
    ViewChild
} from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-podio-assets",
    templateUrl: "./podio-assets.component.html",
    styleUrls: ["./podio-assets.component.css"]
})


export class PodioAssetsComponent implements OnInit {
    @Input() organizations?; 
    @Input() client?: IClientViewModel;

    // material table setup 
    displayedColumns: string[] = ["org", "owner", "solution"];
    @ViewChild(MatSortModule) sort: MatSortModule;
    dataSource;

    constructor(
        private _fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        if (!this.organizations) {
            this.organizations = this._fakeDataService.fakeOrganizations;
        }
        this.dataSource = new MatTableDataSource(this.organizations);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
