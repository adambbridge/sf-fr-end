import { FakeDataService, IPodioOrganizationViewModel, IPodioSpaceViewModel } from './../../services/fake-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PodioService } from '../../services/podio.service';

@Component({
    selector: "app-podio-spaces",
    templateUrl: "./podio-spaces.component.html",
    styleUrls: ["./podio-spaces.component.css"]
})
export class PodioSpacesComponent implements OnInit {
    @Input() org: IPodioOrganizationViewModel;
    @Input() disableSelection?: boolean = false;
    allSpaces: Array<IPodioSpaceViewModel> = [];
    allSpacesSelectionList;
    private _selectedSpaces;
    @Output() selectedSpaces = new EventEmitter<IPodioSpaceViewModel>();
    
    constructor(private _podioService: PodioService) {}

    ngOnInit() {
        this.allSpaces = this.org.spaces;
        console.log(this.allSpaces);
    }

    onSpaceSelection() {
        this._selectedSpaces = this.allSpacesSelectionList.selectedOptions.selected.map(
            (option) => option.value
        );
        this.selectedSpaces.emit(this._selectedSpaces); 
    }
}

