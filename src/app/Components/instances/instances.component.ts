import { FakeDataService } from './../../services/fake-data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit  } from "@angular/core";

@Component({
    selector: "app-instances",
    templateUrl: "instances.component.html"
})
export class InstancesComponent implements OnInit{
    data;
    displayedColumns: string[] = [
        'select',
        'name',
        'version',
        'client',
        'impact'
    ];
    dataSource;
    selection = new SelectionModel(true, []);

    constructor(private fakeDataService: FakeDataService) {}

    ngOnInit() {
        this.data = this.fakeDataService.fakeInstances;
        this.dataSource = new MatTableDataSource(this.data);
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((row) => this.selection.select(row));
    }

    /** The aria label for the checkbox on the passed row */
    checkboxLabel(row?): string {
        if (!row) {
            return `${this.isAllSelected() ? "select" : "deselect"} all`;
        }
        return `${
            this.selection.isSelected(row) ? "deselect" : "select"
        } row ${row.position + 1}`;
    }
}


