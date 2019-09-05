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
import { MatListOption } from '@angular/material';
import { WorkspaceNameFilter } from "../../pipes/filter-pipe.pipe";


@Component({
    selector: "app-podio-spaces",
    templateUrl: "./podio-spaces.component.html",
    styleUrls: ["./podio-spaces.component.css"]
})
export class PodioSpacesComponent implements OnInit {
    @Input() workspaces: IPodioSpaceViewModel[];
    @Input() preselectedSpaces?: IPodioSpaceViewModel[];
    @Input() disableSelection?: boolean = false; // hides checkboxes
    private _selectedSpaces;
    @Output() selectedSpaces = new EventEmitter<IPodioSpaceViewModel>();
    @ViewChild("allSpacesSelectionList") allSpacesSelectionList;
    searchString: string = "";

    constructor(private _podioService: PodioService) {}

    ngOnInit() {
        console.log(this.allSpacesSelectionList);

        if (this.preselectedSpaces) {
          this.preselectedSpaces.forEach(s => {
              this.workspaces.forEach(w => {
                  if (w.workspaceId === s.workspaceId) {
                    w.checked = true;
                  }
              })
          })
        }
    }

    onSpaceSelection() {
        this._selectedSpaces = this.allSpacesSelectionList.selectedOptions.selected.map(
            (option) => option.value
        );
        this.selectedSpaces.emit(this._selectedSpaces);
        console.log(this._selectedSpaces)
    }

    compareFn(user1: IPodioSpaceViewModel, user2: IPodioSpaceViewModel) {
        return user1 && user2 ? user1.workspaceId === user2.workspaceId : user1 === user2;
    }
}
