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
import { MatInputModule } from "@angular/material/input";

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
export class NewSolutionComponent implements OnInit {
    // ALEX CODE
    // @ViewChild("solComp") solutionComponent: SolutionComponent;
    // @Input() solution = new Solution(null, "", "", this.workspaces);
    // workspaces = new Array<$Space>();
    // @Output() spaceIds = new Array<Number>();
    // @Output() selectedSpaces = new EventEmitter<Space[]>();
    // private _spaces = new Array<Space>();
    // spaceIdMapper = map((spaces: Space[]) => {
    //     this.spaceIds = spaces.map((s) => Number.parseInt(s.space_id, 10));
    // });

    // MY CODE
    workspaces; // dont generate until user picks org
    organizations = this.fakeDataService.fakeOrganizations;
    solution: SolutionVM = new SolutionVM(null, "", "", []);
    submitted = false;

    constructor(
        private _saasafrasService: SaasafrasService,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {}

    onOrgSelection(userSelectedOrg) {
        let chosenOrg = this.organizations.find((org) => {
            return org.name === userSelectedOrg.value;
        });
        this.workspaces = chosenOrg.spaces;
        this.workspaces.forEach((space) => (space.checked = false));
    }

    onSubmit(form: NgForm) {
        console.log("form value:", form.value);
        console.log("form valid:", form.valid);
        this.submitted = true;
    }
}

// ALEX'S CODE

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
