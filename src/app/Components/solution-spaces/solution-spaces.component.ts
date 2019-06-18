import { Component, OnInit, Input } from "@angular/core";
import { Solution } from "src/model/saasafras/solution";
import { MatExpansionPanel } from "@angular/material";

@Component({
    selector: "app-solution-spaces",
    templateUrl: "./solution-spaces.component.html",
    styleUrls: ["./solution-spaces.component.css"]
})
export class SolutionSpacesComponent implements OnInit {
    @Input() solution;
    temp = this.solution;
    foo = this.solution;

    constructor() {}

    ngOnInit() {
        console.log(this.solution);
    }
}
