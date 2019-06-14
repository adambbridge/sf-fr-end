import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
    @Input("item") item;
    @Input() chiplist;
    
    constructor() {}

    ngOnInit() {
        console.log('chiplist in card', this.chiplist)
        console.log('item in card', this.item)
    }
}
