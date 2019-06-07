import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "app-new-deployment",
    templateUrl: "./new-deployment.component.html",
    styleUrls: ["./new-deployment.component.css"]
})
export class NewDeploymentComponent implements OnInit {
    // get stored data passed by open method from angular material
    constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) {}

    ngOnInit() {}
}
