import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: "app-mat-chip-custom",
    templateUrl: "./mat-chip-custom.component.html",
    styleUrls: ["./mat-chip-custom.component.css"]
})
export class MatChipCustomComponent implements OnInit {
    @Input() icon;
    @Input() text;

    constructor() {}

    ngOnInit() {
    }
}
