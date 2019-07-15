import { Component, OnInit, Input } from '@angular/core';
import { mixinColor } from '@angular/material';

@Component({
    selector: "app-mat-chip-custom",
    templateUrl: "./mat-chip-custom.component.html",
    styleUrls: ["./mat-chip-custom.component.css"]
})
export class MatChipCustomComponent implements OnInit {
    @Input() icon;
    @Input() text;
    @Input() color;

    constructor() {}

    ngOnInit() {
    }
}
