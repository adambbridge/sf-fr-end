import { AddAccountComponent } from './../add-account/add-account.component';
import {
    FakeDataService,
    IClientViewModel
} from "./../../services/fake-data.service";
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ViewChildren
} from "@angular/core";
import { MatExpansionPanel } from "@angular/material";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-podio-assets",
    templateUrl: "./podio-assets.component.html",
    styleUrls: ["./podio-assets.component.css"]
})
export class PodioAssetsComponent implements OnInit {
    @ViewChildren("spaces") spacesLists;
    selectedSpaces = [];
    @Input() accordionOnly = false;
    @Input() organizations?; // optional
    @Input() client?: IClientViewModel;
    envUI: string = "oneTable";
    addOrgInProgress: boolean = false;

    // MATERIAL TABLE SETUP
    displayedColumns: string[] = ["org", "owner", "isTemplate", "solution"];
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
        console.log(this.organizations);
        console.log(this.dataSource);
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
            if ((result = "add")) {
                this.addOrgInProgress = true;
            }
        });
    }

    // onAddKnownOrgClick() {
    //     const dialogRef = this.dialog.open(AddKnownOrgComponent, {
    //         data: { client: this.client ? this.client : null }
    //     });
    //     dialogRef.afterClosed().subscribe((result) => {
    //         console.log("result: ", result);
    //         if ((result = "add")) {
    //             this.addOrgInProgress = true;
    //         }
    //     });
    // }
    // onAddNewOrgClick() {
    //     console.log("add new org");
    //     const dialogRef = this.dialog.open(AddNewOrgComponent, {
    //         data: { client: this.client ? this.client : null }
    //     });
    //     dialogRef.afterClosed().subscribe((result) => {
    //         console.log("result: ", result);
    //         if ((result = "add")) {
    //             this.addOrgInProgress = true;
    //         }
    //     });
    // }

    /** =========================
     * OLD ACCORDION FUNCTIONS
    ============================= */
    onSelectionChange(e, panelIndex) {
        this.selectedSpaces = this.spacesLists._results[
            panelIndex
        ].selectedOptions.selected;
        console.log(this.selectedSpaces);
    }

    onPanelClose(panelIndex) {
        this.spacesLists._results[panelIndex].deselectAll();
        this.selectedSpaces = [];
    }
}
