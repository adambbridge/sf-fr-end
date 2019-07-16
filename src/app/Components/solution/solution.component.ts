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
import { Router, ActivatedRoute, Params } from "@angular/router";

import {
    FakeDataService,
    ISolutionViewModel,
    ISolutionInstanceViewModel
} from "./../../services/fake-data.service";
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
    appId;
    v1 = false;
    showTemplate = true;
    solutions: ISolutionViewModel[];
    solution: ISolutionViewModel;
    instances: ISolutionInstanceViewModel[];
    fakeVersions = ["2.1 Sierra (latest)", "2.0 Sierra", "1.0 Nevada", "0.0 InHouseVersion"];
    selectedVersion = this.fakeVersions[0];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.appId = this.route.snapshot.paramMap.get("id");
        this.solutions = this.fakeDataService.fakeSolutions;
        this.instances = this.fakeDataService.fakeInstances;
        this.solutions.forEach((sol) => {
            if (sol.appId === this.appId) {
                this.solution = sol;
            }
        });
        console.log("solution", this.solution);
    }

    toggleVersion() {
        if (this.v1 === true) {
            this.v1 = false;
        } else {
            this.v1 = true;
        }
    }
}
