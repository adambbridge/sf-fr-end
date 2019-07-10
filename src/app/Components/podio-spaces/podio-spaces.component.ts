import {
    FakeDataService,
    IPodioOrganizationViewModel,
    IPodioSpaceViewModel
} from "./../../services/fake-data.service";
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild
} from "@angular/core";
import { PodioService } from "../../services/podio.service";

@Component({
    selector: "app-podio-spaces",
    templateUrl: "./podio-spaces.component.html",
    styleUrls: ["./podio-spaces.component.css"]
})
export class PodioSpacesComponent implements OnInit {
    @Input() org?: IPodioOrganizationViewModel;
    @Input() workspaces?;
    @Input() disableSelection?: boolean = false;
    allSpaces: Array<IPodioSpaceViewModel> = [];
    private _selectedSpaces;
    @Output() selectedSpaces = new EventEmitter<IPodioSpaceViewModel>();
    @ViewChild("allSpacesSelectionList") allSpacesSelectionList;

    constructor(private _podioService: PodioService) {}

    ngOnInit() {
        if (this.workspaces) {
            this.showPreselectedSpaces();
        } else {
            this.showSelectableSpaces();
        }
        console.log(this.allSpaces);
    }

    onSpaceSelection() {
        this._selectedSpaces = this.allSpacesSelectionList.selectedOptions.selected.map(
            (option) => option.value
        );
        this.selectedSpaces.emit(this._selectedSpaces);
    }

    showPreselectedSpaces() {
        this.allSpaces = this.workspaces;
    }

    showSelectableSpaces() {
        this.allSpaces = this.org.spaces;
    }
}
