import { SolutionHistoryComponent } from "src/app/Components/solution-history/solution-history.component";
import {
    FakeDataService,
    ISolutionViewModel
} from "src/app/services/fake-data.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTooltip } from "@angular/material";
import { TooltipPosition } from "@angular/material/tooltip";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
    // items ie card items have: name, imageUrl, description,
    @ViewChild("tooltip") tooltip;
    onboardingOptions;
    badges;
    videoUrl: string = "https://www.youtube.com/embed/yG90m3H_kgA";
    videoUrlSafe;
    solutions: ISolutionViewModel[];
    recentTasks = [];

    constructor(
        private dom: DomSanitizer,
        private fakeDataService: FakeDataService
    ) {
        this.videoUrlSafe = dom.bypassSecurityTrustResourceUrl(this.videoUrl);
    }

    ngOnInit() {
        this.solutions = this.fakeDataService.fakeSolutions;
        this._setRecentTasks(7);
        console.log('recent ts', this.recentTasks)

        // DELETE ONCE CONFIRMED THAT HARD CODE IS NEEDED SO
        // WE CAN USE ROUTERLINK VS HREF. HREF MUCH SLOWER
        // this.badges = [
        //     {
        //         name: "Login with Podio",
        //         helpText: "Loads associated orgs",
        //         icon: "check_circle_o",
        //         linkUrl: "/podio",
        //         collected: true
        //     },
        //     {
        //         name: "Create Your First Solution",
        //         helpText: "Name it & select workspaces",
        //         icon: "check_circle_o",
        //         linkUrl: "/solutions/new",
        //         collected: false
        //     },
        //     {
        //         name: "Add client to deploy to",
        //         helpText: "And deploy Solutions to their orgs",
        //         icon: "account_circle",
        //         linkUrl: "/clients/new",
        //         collected: false
        //     },
        //     {
        //         name: "Deploy your Solution!",
        //         helpText: "And deploy Solutions to their orgs",
        //         icon: "stars",
        //         linkUrl: "/clients/new",
        //         collected: false
        //     }
        // ];

        console.log(this.onboardingOptions);
    }

    ngAfterViewInit() {
        this.tooltip.show(0);
        console.log("after view init");
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
