import { AddEnvironmentComponent } from './../add-environment/add-environment.component';
import { FakeDataService } from "./../../services/fake-data.service";
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
    envUI: string = "oneTable";

    // MATERIAL TABLE SETUP
    displayedColumns: string[] = ["org", "owner", "solution", "isTemplate"];
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

    onOrgRowClick(test) {
        console.log(test);
        // this.dialog.open(PodioOrgDetailComponent, {
        //     data: {
        //         organization: this.solution
        //     }
        // });
    }

    onAddEnvClick() {
        this.dialog.open(AddEnvironmentComponent, {});
    }

    /**
     * OLD ACCORDION FUNCTIONS
     */
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
