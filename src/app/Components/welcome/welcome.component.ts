import { OnboardingSlideshowComponent } from "./../onboarding-slideshow/onboarding-slideshow.component";
import { SolutionHistoryComponent } from "src/app/Components/solution-history/solution-history.component";
import {
    FakeDataService,
    ISolutionViewModel,
    IPodioAccountViewModel
} from "src/app/services/fake-data.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import * as introJs from "intro.js/intro.js";
import { MatDialog } from "@angular/material";

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
    accounts: IPodioAccountViewModel[];
    recentTasks = [];
    before: string = "before";
    private intro = introJs();

    constructor(
        private dom: DomSanitizer,
        private fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {
        this.videoUrlSafe = dom.bypassSecurityTrustResourceUrl(this.videoUrl);
    }

    ngOnInit() {
        this.solutions = this.fakeDataService.fakeSolutions;
        this.accounts = this.fakeDataService.fakeAccounts;
        this.launchOnboardingSlideshow();
        this._setRecentTasks(7);
    }

    launchOnboardingSlideshow() {
        const dialogRef = this.dialog.open(OnboardingSlideshowComponent, {
            data: {
                accounts: this.accounts
            }
        });
        dialogRef.afterClosed().subscribe((event) => {
            if (event === "tour") {
                this.intro.start();
            }
        });
    }

    /** called by event emission from child component */
    initIntro() {
        console.log("child view initialized new solution that is. ");
        var tipsArray = [
            {
                intro: "Welcome to the mini tour. We'll keep this brief!"
            },
            {
                element: document.querySelector("#podio-accounts-card"),
                intro: "We've loaded your Orgs and workspaces."
            },
            {
                element: document.querySelector("#create-first-solution"),
                intro: "You are all set to create your first solution!"
            },
            {
                element: document.querySelector("#podio-accounts"),
                intro: "Get access to other Podio accounts and orgs here"
            },
            {
                element: document.querySelector("#level-up"),
                intro: "Level Up links provide guided task completion"
            },
            {
                element: document.querySelector("#video-general-intro"),
                intro:
                    "Check out our videos or help section anytime to learn more. Thanks for taking the mini-tour!"
            }
        ];
        var  hintsArray = [
            { 
                hint: "First hint", 
                element: "#new-feature" 
            },
            {
                hint: "Second hint",
                element: "#new-button",
                hintAnimation: false
            }
        ];
       
        this.intro.setOptions({
            skipLabel: "Exit mini tour",
            overlayOpacity: 0.6,
            disableInteraction: true,
            showProgress: true,
            exitOnEsc: true,
            tooltipPosition: "bottom",
            tooltipClass: "", // add a css class to tooltip
            keyboardNavigation: true,
            steps: tipsArray,
            hints: hintsArray
        });
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
