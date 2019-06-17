import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
    // items ie card items have: name, imageUrl, description,

    onboardingOptions;

    constructor() {}

    ngOnInit() {
         this.onboardingOptions = [
             {
                 name: "Let's build something!",
                 featured: true,
                 iconName: "build",
                 description:
                     "Let's pick some Podio workspaces and create a Solution!",
                 linkUrl: "/podio"
             },
             {
                 name: "About Saasafras",
                 iconName: "play_circle_outline",
                 description:
                     "What problems can Saasafras solve? (2 min video)",
                 linkUrl: "/podio"
             },
             {
                 name: "Browse Around",
                 iconName: "directions_walk",
                 description: "Just wanna click around for now",
                 linkUrl: "/podio"
             }
         ];

         console.log(this.onboardingOptions)
    }
}
