import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { v4 as uuid } from "node_modules/uuid";
import { map } from "rxjs/operators";

import { FakeDataService, ISolutionViewModel } from "./../../services/fake-data.service";
import { Solution } from "src/model/saasafras/solution";
import { $Space } from "src/model/saasafras/saas.space";
import { Space } from "src/model/podio/space";

import { SolutionTasksComponent } from "src/app/Components/solution-tasks/solution-tasks.component";
import { SolutionSpacesComponent } from "src/app/Components/solution-spaces/solution-spaces.component";
import { SolutionHistoryComponent } from "src/app/Components/solution-history/solution-history.component";
import { SolutionAboutComponent } from "src/app/Components/solution-about/solution-about.component";

@Component({
    selector: "app-solution",
    templateUrl: "./solution.component.html",
    styleUrls: ["./solution.component.css"]
})


export class SolutionComponent implements OnInit {
    // @Input() solution: Solution;
    // TODO initialize this in ngOnInit
    v1 = false;
    solution: ISolutionViewModel = this.fakeDataService.fakeSolution;

    constructor(private fakeDataService: FakeDataService) {}

    ngOnInit() {}

    toggleVersion() {
        if(this.v1 === true) {
            this.v1 = false;
        } else {
            this.v1 = true;
        }
    }
}
