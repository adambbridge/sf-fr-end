import { AddAccountComponent } from "./../add-account/add-account.component";
import {
    FakeDataService,
    IClientViewModel,
    IPodioAccountViewModel
} from "./../../services/fake-data.service";
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ViewChildren
} from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-podio-accounts",
    templateUrl: "./podio-accounts.component.html",
    styleUrls: ["./podio-accounts.component.css"]
})

// fakeAccounts: Array<IPodioAccountViewModel> = [
//         {
//             id: '123',
//              name: "Brick Bridge Consulting",
//             owner: "Gil Roberts",
//             email: "gil@brickbridgeconsulting.com",
//             orgs: this.fakeOrganizations
//         },
//         {
//             id: '456',
//              name: "Jordan",
//              owner: "Jordan",
//             email: "jordan@someCompany.com",
//             orgs: this.fakeOrganizationsLong
//         }
//     ];
export class PodioAccountsComponent implements OnInit {
    @Input() accounts?: IPodioAccountViewModel[];
    @Input() client?: IClientViewModel;

    // material table setup
    displayedColumns: string[] = ["name", "client", "orgs"];
    @ViewChild(MatSortModule) sort: MatSortModule;
    dataSource;

    constructor(
        private _fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        if (!this.accounts) {
            this.accounts = this._fakeDataService.fakeAccounts;
        }
        this.dataSource = new MatTableDataSource(this.accounts);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onAddAccountClick() {
        const dialogRef = this.dialog.open(AddAccountComponent, {
            data: { client: this.client ? this.client : null }
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log("result: ", result);
        });
    }
}
