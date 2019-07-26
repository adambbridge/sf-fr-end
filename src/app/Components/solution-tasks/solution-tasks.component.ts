import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from "@angular/material";

import { NewUpdateComponent } from "src/app/Components/new-update/new-update.component";
import { NewDeploymentComponent } from "src/app/Components/new-deployment/new-deployment.component";
import { NewPatchComponent } from "src/app/Components/new-patch/new-patch.component";
import { Solution } from 'src/model/saasafras/solution';

@Component({
    selector: "app-solution-tasks",
    templateUrl: "./solution-tasks.component.html",
    styleUrls: ["./solution-tasks.component.css"]
})
export class SolutionTasksComponent implements OnInit {
    @Input() solution;

    constructor(
        private dialog: MatDialog
    ) {}

    ngOnInit() {}

    /**
     * TODO
     * ADD ABILITY TO ADD OR REMOVE SPACES FROM SOL. WORKSPACES
     * WHEN PERFORMING AN UPDATE
     * pass-data: allSourceOrgSpaces = sol.workspaces[0].podioSpace.org_id 
     * pass-data: currentlyUsedSpaces = sol.spaces 
     * use the spaces component with selection list like org-detail uses
     * 
     */
    onUpdateClick() {
        this.dialog.open(NewUpdateComponent, {
            data: {
                solution: this.solution
            }
        });
    }

    onDeploymentClick() {
        this.dialog.open(NewDeploymentComponent, {
            data: {
                solution: this.solution
            }
        });
    }

    onPatchClick() {
        this.dialog.open(NewPatchComponent, {
            data: {
                solution: this.solution
            }
        });
    }
}
