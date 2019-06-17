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
import { MatSnackBar } from "@angular/material/snack-bar";


// our stuff
import {
    SolutionCreationRequest,
    SolutionCreationResponse
} from "src/model/saasafras/solutionCreationRequest";
import { Space } from "src/model/podio/space";
import { Solution } from "src/model/saasafras/solution";
import { SolutionVM } from "src/app/Components/solution/solution.vm";
import { $Space } from "../../../model/saasafras/saas.space";
import { SaasafrasService } from "../../services/saasafras.service";
import { SolutionComponent } from "../solution/solution.component";
import { FakeDataService } from "src/app/services/fake-data.service";

@Component({
    selector: "app-new-solution",
    templateUrl: "./new-solution.component.html",
    styleUrls: ["./new-solution.component.css"]
})

// TODO ALEX'S CODE WAS CUT AND PASTED BELOW THE CLASS AS COMMENTS
export class NewSolutionComponent implements OnInit {
    organizations;
    workspaces; // dont generate until user picks org
    selectedWorkspaces = [];
    selectedWorkspacesError: boolean = true;
    newSolutionForm: FormGroup;
    submitted = false;
    fakeActionCompleted = false;

    constructor(
        private _fb: FormBuilder,
        private _saasafrasService: SaasafrasService,
        private fakeDataService: FakeDataService,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.organizations = this.fakeDataService.fakeOrganizations;

        this.newSolutionForm = this._fb.group({
            name: ["", Validators.required],
            organization: ["", Validators.required],
            // empty form array
            workspaceControls: this._fb.array([]),
            description: [""]
        });
    }

    // WHEN choose org, get spaces from it
    // and populate workspaces array of form model
    onOrgSelection(userSelectedOrg) {
        let chosenOrg = this.organizations.find((org) => {
            return org.name === userSelectedOrg.value;
        });
        let spaces = chosenOrg.spaces;
        this.clearFormArray(this.workspaceControls);
        this.selectedWorkspaces = [];
        this._updateFormErrors();
        spaces.forEach((space) => {
            // add 1 unchecked checkbox for each space
            this.workspaceControls.push(this._fb.control(false));
        });
        this.workspaces = spaces;
        
    }

    clearFormArray = (formArray: FormArray) => {
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

    // sync selected spaces with selected checkbox controls
    syncItemsWithControls() {
        this.selectedWorkspaces = [];
        this.workspaceControls.controls.forEach((ctrl, index) => {
            if (ctrl.value === true) {
                this.selectedWorkspaces.push(this.workspaces[index]);
            }
        });
        // console.log(this.selectedWorkspaces);
        // console.log(this.workspaceControls);
        this._updateFormErrors();
    }

    private _updateFormErrors() {
        this.selectedWorkspacesError =
            this.selectedWorkspaces.length > 0 ? false : true;
    }

    onSubmit() {
        this.submitted = true;

        // delete true/false controls and add selected spaces
        delete this.newSolutionForm.value.workspaceControls; // true/false values
        this.newSolutionForm.value.workspaces = this.selectedWorkspaces;
        this._snackBar.open(
            "Something happened in the component",
            "test-action",
            { duration: 4000 }
        )
        console.log("form value:", this.newSolutionForm.value);
        console.log("form value:", this.newSolutionForm.valid);
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
