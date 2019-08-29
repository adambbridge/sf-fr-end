import { SolutionHistoryComponent } from "src/app/Components/solution-history/solution-history.component";
import {
    FakeDataService,
    ISolutionViewModel
} from "src/app/services/fake-data.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as introJs from "intro.js/intro.js";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
    badges;
    videoUrl: string = "https://www.youtube.com/embed/EmrTeRgpchs";
    videoUrlSafe;
    solutions: ISolutionViewModel[];
    recentTasks = [];
    before: string = "before";
    private intro = introJs();

    constructor(
        private dom: DomSanitizer,
        private fakeDataService: FakeDataService
    ) {
        this.videoUrlSafe = dom.bypassSecurityTrustResourceUrl(this.videoUrl);
    }

    ngOnInit() {
        this.solutions = this.fakeDataService.fakeSolutions;
        this._setRecentTasks(7);
    }

    /**
     * tagged intro items level-up, create-first-solution, podio-account (click it, more tooltips for adding)
     */
    initIntro() {
        console.log("child view initialized new solution that is. ");
        this.intro.setOptions({
            skipLabel: "Got it",
            overlayOpacity: 0.6,
            disableInteractions: false,
            exitOnEsc: true,
            tooltipPosition: "bottom",
            tooltipClass: "", // add a css class to tooltip
            keyboardNavigation: true,
            steps: [
                {
                    element: document.querySelector("#podio-accounts-card"),
                    intro:
                        "We've loaded your Podio orgs and workspaces. You are all set to create your first solution!"
                },
                // {
                //     element: document.querySelector("#create-first-solution"),
                //     intro: "We've loaded your Podio orgs and workspaces. You are all set to create your first solution!"
                // },
                {
                    element: document.querySelector("#level-up"),
                    intro:
                        "Once you have a Solution, you can deploy it to any Podio org you have access to, create versions, patch updates and more."
                },
                {
                    element: document.querySelector("#podio-accounts"),
                    intro:
                        "Manage Podio Accounts. You can send access requests from within SaaSafrass"
                }
            ]
        });

        this.intro.start();

        // this.intro.addHints();
        // this.intro.onexit(function() {
        //     alert("exit of introduction");
        // });
        // this.intro.oncomplete(function() {
        //     alert("end of introduction");
        // });
    }

    private _setRecentTasks(days) {
        var now = new Date();
        var cutoffDate = this._addDays(now, (days *= -1));

        this.solutions.forEach((sol) => {
            sol.history.forEach((task) => {
                if (task.scheduledFor > cutoffDate) {
                    this.recentTasks.push(task);
                }
            });
        });
    }

    private _addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
}
