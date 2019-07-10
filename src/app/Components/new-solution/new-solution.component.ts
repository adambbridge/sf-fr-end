import { UtilsService } from './../../services/utils.service';
import { Org } from "./../../../model/podio/organization";
// vendors
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter
} from "@angular/core";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import { NgForm } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

// our stuff
import {
    SolutionCreationRequest,
    SolutionCreationResponse
} from "src/model/saasafras/solutionCreationRequest";
import { Space, Spaces } from "src/model/podio/space";
import { Solution } from "src/model/saasafras/solution";
import { $Space } from "../../../model/saasafras/saas.space";
import { SaasafrasService } from "../../services/saasafras.service";
import { SolutionComponent } from "../solution/solution.component";
import {
    FakeDataService,
    IPodioOrganizationViewModel,
    IPodioSpaceViewModel
} from "src/app/services/fake-data.service";
import { PodioService } from "src/app/services/podio.service";

@Component({
    selector: "app-new-solution",
    templateUrl: "./new-solution.component.html",
    styleUrls: ["./new-solution.component.css"]
})
export class NewSolutionComponent implements OnInit {
    organizations: Array<IPodioOrganizationViewModel>;
    workspaces: Array<IPodioSpaceViewModel>;
    selectedWorkspaces: Array<IPodioSpaceViewModel> = [];
    @Input() preselectedWorkspaces?;
    newSolutionForm: FormGroup;
    submitted = false;
    @ViewChild("spaces") spaces;

    constructor(
        private _fb: FormBuilder,
        private _saasafrasService: SaasafrasService,
        private _podioService: PodioService,
        private fakeDataService: FakeDataService,
        private _utilsService: UtilsService
    ) {}

    ngOnInit() {
        this._getOrgs();
        this._podioService.refresh();
        this._createNewSolutionForm();
    }

    onOrgSelection(userSelectedOrg) {
        let chosenOrg = this.organizations.find(
            (org) => org.name === userSelectedOrg.value
        );
        this._podioService.GetWorkspacesInOrg(chosenOrg.orgId).subscribe({
            next: (sa) => {
                chosenOrg = {
                    orgId: chosenOrg.orgId,
                    name: chosenOrg.name,
                    owner: "fake owner",
                    spaces: sa.map((s) => {
                        return {
                            workspaceName: s.name,
                            workspaceId: s.space_id,
                            description: s.description,
                            checked: false,
                            podioSpace: null,
                            apps: null
                        };
                    })
                };
                this._clearFormArray(this.workspaceControls);
                this.selectedWorkspaces = [];
                this.workspaces = chosenOrg.spaces;
            }
        });
        this._podioService.refresh();
    }

    // onSpaceSelection() {
    //     this.selectedWorkspaces = this._getSelectedSpaces();
    // }
    onSpaceSelection(selected) {
        this.selectedWorkspaces = selected;
        console.log("selected", this.selectedWorkspaces);
    }

    onSubmit() {
        this.submitted = true;
        // this.selectedWorkspaces = this._getSelectedSpaces(); dont need this. already have them.
        delete this.newSolutionForm.value.workspaceControls; // true/false values
        this.newSolutionForm.value.workspaces = this.selectedWorkspaces;
        console.log("form value:", this.newSolutionForm.value);
        console.log("form value:", this.newSolutionForm.valid);
        this._utilsService.openSnackBar("triggered this from onSubmit");
    }

    /*=========================
            HELPERS
     =========================*/

    // private _getSelectedSpaces() {
    //     let selected = this.spaces.selectedOptions.selected.map(
    //         (option) => option.value
    //     );
    //     return selected;
    // }

    private _getOrgs() {
        this._podioService.GetUserOrgs().subscribe({
            next: (os: Org[]) => {
                console.log("getting new orgs");
                this.organizations = os.map((o) => {
                    return {
                        name: o.name,
                        owner: "fake owner",
                        orgId: o.org_id,
                        spaces: []
                    };
                });
            }
        });
    }

    private _createNewSolutionForm() {
        this.newSolutionForm = this._fb.group({
            name: ["", Validators.required],
            description: ["", Validators.required],
            organization: ["", Validators.required],
            workspaceControls: this._fb.array([])
        });
    }

    private _clearFormArray = (formArray: FormArray) => {
        while (formArray.length !== 0) {
            formArray.removeAt(0);
        }
    };

    get workspaceControls() {
        return this.newSolutionForm.get("workspaceControls") as FormArray;
    }

    get description() {
        return <FormArray>this.newSolutionForm.get("description");
    }
}

// ALEX'S CODE

// @ViewChild("solComp") solutionComponent: SolutionComponent;
// @Input() solution = new Solution(null, "", "", this.workspaces);
// workspaces = new Array<$Space>();
// @Output() spaceIds = new Array<Number>();
// @Output() selectedSpaces = new EventEmitter<Space[]>();
// private _spaces = new Array<Space>();
// spaceIdMapper = map((spaces: Space[]) => {
//     this.spaceIds = spaces.map((s) => Number.parseInt(s.space_id, 10));
// });
// solution: SolutionVM = new SolutionVM(null, "", "", []);

// onSubmit(form: NgForm) {
//     console.log(form);

// const request = new SolutionCreationRequest(
//     form.value.name,
//     this.spaceIds
// );
// this._saasafrasService.CreateSolution(request).subscribe({
//     next: (response: SolutionCreationResponse) => {
//         console.log("received response: " + response.message);
//     }
// });
// }

// addSpace(space: Space) {
//     if (this._spaces.find((s) => s.space_id === space.space_id)) {
//         console.log("space " + space.space_id + " was already added.");
//     } else {
//         this._spaces.push(space);
//         console.log("space " + space.space_id + " was added.");
//         this.selectedSpaces.emit(this._spaces);
//     }
// }

// removeSpace(space: Space) {
//     if (this._spaces.find((s) => s.space_id === space.space_id)) {
//         this._spaces = this._spaces.filter(
//             (s) => s.space_id !== space.space_id
//         );
//         console.log("space " + space.space_id + " was removed.");
//         this.selectedSpaces.emit(this._spaces);
//     } else {
//         console.log("space " + space.space_id + " isn't in the list.");
//     }
// }

/*
@Pipe({name: 'elementPosition', pure: true})
export class ElementPosition {
   transform(value: HTMLElement, xLerp: number, yLerp: number): Point|null {
       if (value != null) {
           const boundingRect = value.getBoundingClientRect();
           return {
               x: boundingRect.left + xLerp * boundingRect.width,
               y: boundingRect.top + yLerp * boundingRect.height,
           };
       } else {
           return null;
       }
   }
}

<div
   #titleElement
   (click)="expanded = !expanded"
>
   {{title}}
</div>
<ng-container popup [visible]="expanded">
   <app-popup
       *popupContent
       [items]="menuOptions"
       [position]="titleElement | elementPosition:0:1"
   ></app-popup>
</ng-container>

*/
