import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter
} from "@angular/core";
import { Solution } from "src/model/saasafras/solution";
import { SolutionVM } from 'src/app/Components/solution/solution.vm';
import { NgForm } from "@angular/forms";
import { v4 as uuid } from "node_modules/uuid";
import { $Space } from "src/model/saasafras/saas.space";
import { map } from "rxjs/operators";
import { Space } from "src/model/podio/space";
import { MatExpansionPanel } from "@angular/material";

@Component({
    selector: "app-solution",
    templateUrl: "./solution.component.html",
    styleUrls: ["./solution.component.css"]
})
export class SolutionComponent implements OnInit {
    // @Input() solution: Solution;
    solution: SolutionVM;
    @Input() showForm: boolean;
    @Input() expanded: boolean;
    @ViewChild("panel") panel: MatExpansionPanel;

    constructor() {}

    ngOnInit() {
        // this.panel.expanded = this.expanded;
        this.solution = this.getFakeSolution();
    }

    getFakeSolution() {
        const fakeSpace = {
            org_id: "123",
            space_id: "123",
            name: "Fake workspace name",
            created_on: '05/10/2017',
            description:
                "This is a workspace description. Not sure how long these might be. May need to truncate",
            owner: "Owner. Is the owner an org?",
            applications: ["Fake application", "Fake application", "Fake application", "Fake application", "Fake application"]
        };
        const fakeSolution = {
            appId: "123456",
            name: "Fake Solution",
            version: "2",
            workspaces: [
                fakeSpace,
                fakeSpace,
                fakeSpace,
                fakeSpace,
                fakeSpace,
                fakeSpace,
                fakeSpace,
                fakeSpace
            ]
        };

        return fakeSolution;
    }

    // getId(name: string) {
    //   const id: string = uuid();
    //   console.log('creating soluionId: ' + id);
    //   return id;
    // }
}
