import { Component, OnInit, Input } from '@angular/core';
import { fadeInItems } from '@angular/material';
import { link } from 'fs';

@Component({
    selector: "app-card-collection",
    templateUrl: "./card-collection.component.html",
    styleUrls: ["./card-collection.component.css"]
})
export class CardCollectionComponent implements OnInit {
    @Input("items") items;
    @Input("showCards") showCards;
    @Input() chiplist;
    @Input("link") link;

    constructor() {}

    ngOnInit() {
        console.log(this.items);
    }
}
