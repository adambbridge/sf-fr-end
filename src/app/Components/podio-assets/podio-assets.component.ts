import { FakeDataService } from "./../../services/fake-data.service";
import { Component, OnInit, Input, ViewChild, ViewChildren } from "@angular/core";
import { MatExpansionPanel } from "@angular/material";

@Component({
    selector: "app-podio-assets",
    templateUrl: "./podio-assets.component.html",
    styleUrls: ["./podio-assets.component.css"]
})
export class PodioAssetsComponent implements OnInit {
    organizations;
    @ViewChildren("spaces") spacesLists;
    selectedSpaces = [];
    @Input() accordionOnly = false;

    constructor(private _fakeDataService: FakeDataService) {}

    ngOnInit() {
        this.organizations = this._fakeDataService.fakeOrganizations;
    }

    onSelectionChange(e, panelIndex) {
        this.selectedSpaces = this.spacesLists._results[panelIndex].selectedOptions.selected;
        console.log(this.selectedSpaces);
    }

    onPanelClose(panelIndex) {
        this.spacesLists._results[panelIndex].deselectAll();
        this.selectedSpaces = [];
    }

    applyFilter(x) {
        console.log(x);
        // TODO implement the filter
    }
}
