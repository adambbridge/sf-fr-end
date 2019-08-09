import { SolutionHistoryComponent } from "src/app/Components/solution-history/solution-history.component";
import {
    FakeDataService,
    ISolutionViewModel
} from "src/app/services/fake-data.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
    badges;
    videoUrl: string = "https://www.youtube.com/embed/yG90m3H_kgA";
    videoUrlSafe;
    solutions: ISolutionViewModel[];
    recentTasks = [];
    onboardMssgs = {
        levelUp: true
    }

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
