import { FakeDataService } from './../../services/fake-data.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatExpansionPanel } from "@angular/material";



@Component({
    selector: "app-podio-assets",
    templateUrl: "./podio-assets.component.html",
    styleUrls: ["./podio-assets.component.css"]
})
export class PodioAssetsComponent implements OnInit {
    organizations;
    @ViewChild("spaces") spacesList;
    selectedSpaces = [];
    panelOpenState = false;

    constructor(private _fakeDataService: FakeDataService) {}

    ngOnInit() {
        this.organizations = this._fakeDataService.fakeOrganizations;
    }

    onSelectionChange(e) {
        // let justSelected = e.option.value;
        // console.log('just selected:', justSelected)

        this.selectedSpaces = this.spacesList.selectedOptions.selected;
        console.log(this.selectedSpaces);
    }
}
