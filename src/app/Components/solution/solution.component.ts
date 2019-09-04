import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { v4 as uuid } from "node_modules/uuid";
import { map } from "rxjs/operators";
import { Router, ActivatedRoute, Params } from "@angular/router";

import {
    FakeDataService,
    ISolutionViewModel,
    ISolutionInstanceViewModel,
    ISolutionTaskViewModel
} from "./../../services/fake-data.service";

@Component({
    selector: "app-solution",
    templateUrl: "./solution.component.html",
    styleUrls: ["./solution.component.css"]
})
export class SolutionComponent implements OnInit {
    appId;
    v1 = false;
    showTemplate = true;
    solutions: ISolutionViewModel[];
    solution: ISolutionViewModel;
    versions = [];
    queuedTasks: ISolutionTaskViewModel[] = [];
    taskHistory: ISolutionTaskViewModel[] = [];
    instances: ISolutionInstanceViewModel[];
    selectedVersion;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fakeDataService: FakeDataService
    ) {}

    ngOnInit() {
        this.appId = this.route.snapshot.paramMap.get("id");
        this.solutions = this.fakeDataService.fakeSolutions;
        this.versions = this._getVersionsFromSolutions();
        this.selectedVersion = this.versions[0];
        this.instances = this.fakeDataService.fakeInstances;
        this._setCurrentSolution();
        this._buildTaskArrays();
    }

    /** ==========================
     *  HELPERS
     * =========================== */

    private _buildTaskArrays() {
        this.solution.history.forEach((task) => {
            if (task.status === "scheduled" || task.status === "in progress") {
                this.queuedTasks.push(task);
            } else {
                this.taskHistory.push(task);
            }
        });
    }

    private _getVersionsFromSolutions() {
        var versions = [];
        this.solutions.forEach((sol) => {
            let v = {
                number: sol.versionNumber,
                name: sol.versionName
            };
            versions.push(v);
        });
        console.log(versions);
        return versions;
    }

    private _setCurrentSolution() {
        this.solutions.forEach((sol) => {
            if (sol.appId === this.appId) {
                this.solution = sol;
            }
        });
    }
}
