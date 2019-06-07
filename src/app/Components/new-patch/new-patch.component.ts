import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "app-new-patch",
    templateUrl: "./new-patch.component.html",
    styleUrls: ["./new-patch.component.css"]
})
export class NewPatchComponent implements OnInit {
    // get stored data passed by open method from angular material
    constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) {}

    ngOnInit() {}
}

