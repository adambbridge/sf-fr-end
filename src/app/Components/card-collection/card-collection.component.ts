import { Component, OnInit, Input } from '@angular/core';
import { fadeInItems } from '@angular/material';

@Component({
    selector: "app-card-collection",
    templateUrl: "./card-collection.component.html",
    styleUrls: ["./card-collection.component.css"]
})
export class CardCollectionComponent implements OnInit {
    @Input("items") items;
    @Input("showCards") showCards;
    @Input() chiplist;

    constructor() {}

    ngOnInit() {
        console.log(this.items);
    }
}
