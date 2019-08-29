import * as introJs from "intro.js/intro.js";
import { Component, ViewChild, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "Saasafras";
    //   @ViewChild('sidenav')
    intro = introJs();

    ngOnInit() {
        // this._setIntroOptions();
        // this.intro.start();
    }

    onToggle() {
        // sidenav.toggle();
    }

    // private _setIntroOptions() {
    //     this.intro.setOptions({
    //         steps: [
    //             {
    //                 element: document.querySelector("#tip1"),
    //                 intro: "Hello World!"
    //             },
    //             {
    //                 element: document.querySelector("#tip2"),
    //                 intro: "tip 2!"
    //             }
    //         ]
    //     });
    // }
}
