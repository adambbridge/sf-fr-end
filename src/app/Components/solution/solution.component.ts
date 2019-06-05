import {
    Component,
    OnInit,
    Input,
    ViewChild,
    Output,
    EventEmitter
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { v4 as uuid } from "node_modules/uuid";
import { map } from "rxjs/operators";

import { MatExpansionPanel } from "@angular/material";
import { MatTableDataSource } from "@angular/material";
import { MatSortModule } from "@angular/material/sort";

import { FakeDataService } from "./../../services/fake-data.service";
import { Solution } from "src/model/saasafras/solution";
import { SolutionVM } from "src/app/Components/solution/solution.vm";
import { $Space } from "src/model/saasafras/saas.space";
import { Space } from "src/model/podio/space";

@Component({
    selector: "app-solution",
    templateUrl: "./solution.component.html",
    styleUrls: ["./solution.component.css"]
})
export class SolutionComponent implements OnInit {
    // @Input() solution: Solution;
    // TODO initialize this in ngOnInit
    solution: SolutionVM = this.fakeDataService.fakeSolution;

    @Input() showForm: boolean;
    @Input() expanded: boolean;
    @ViewChild("panel") panel: MatExpansionPanel;

    // configure material workspaces table 
    displayedColumns: string[] = ["date", "task", "environment", "description"];
    dataSource = new MatTableDataSource(this.solution.history);
    @ViewChild(MatSortModule) sort: MatSortModule;

    constructor(private fakeDataService: FakeDataService) {}

    ngOnInit() {
        // this.panel.expanded = this.expanded;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // getId(name: string) {
    //   const id: string = uuid();
    //   console.log('creating soluionId: ' + id);
    //   return id;
    // }
}
