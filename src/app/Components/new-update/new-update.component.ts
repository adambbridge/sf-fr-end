import { FakeDataService } from 'src/app/services/fake-data.service';
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: "app-new-update",
    templateUrl: "./new-update.component.html",
    styleUrls: ["./new-update.component.css"]
})
export class NewUpdateComponent implements OnInit {
    solution;
    sourceOrgId;
    sourceOrg;
    selectedVersionSpaces;
    updateForm;

    /** FAKE DATA */
    // spaces have workspaceName, apps
    allSourceOrgSpaces;
    versions = [
        {
            versionNumber: 0.0,
            spaces: [{ workspaceId: 123 }]
        },
        {
            versionNumber: 1.0,
            spaces: [{ workspaceId: 123 }]
        }
    ];

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private fb: FormBuilder,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.solution = this._passedData.solution;
        /** TODO USE THIS WHEN WE USE REAL DATA  */
        this.sourceOrgId = this.solution.workspaces[0].podioSpace.org_id;
        this.sourceOrg = this.fakeDataService.fakeOrganization1;
        this.allSourceOrgSpaces = this.sourceOrg.spaces;
        // todo: set selected spaces from most recent version of solution?

        this.updateForm = this.fb.group({
            solution: ["", Validators.required],
            version: ["", Validators.required],
            source: [""],
            name: [""],
            notes: [""]
        });
        this.updateForm.controls.solution.setValue(
            this._passedData.solution.name
        );
    }

    onVersionSelection() {
        let version = this.updateForm.value.version;
        /**
         * TODO
         * set selected spaces which will be used by update task
         * and will show up as checked
         * spaces selection list hidden until this.selectedSpaces
         */
        this.selectedVersionSpaces = version.spaces;
        /** set checkboxes */
        this.allSourceOrgSpaces.forEach(space => {
            
        })
    }

    /** this captures updated selected spaces */
    onSpaceSelection($event) {
        console.log($event);
        
    }

    onSubmit() {
        console.warn(this.updateForm.value);
        console.warn(this.updateForm.valid);
    }
}
