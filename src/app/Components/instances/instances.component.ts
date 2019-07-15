import { FakeDataService } from './../../services/fake-data.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, Input  } from "@angular/core";
import { TooltipPosition } from "@angular/material/tooltip";


@Component({
    selector: "app-instances",
    templateUrl: "instances.component.html"
})
export class InstancesComponent implements OnInit {
    dataSource;
    selection = new SelectionModel(true, []);
    tooltipPosition = 'above';
    // @Input() hidePatchImpactColumn? = true;
    @Input() patchImpactOnSpaces; 
    @Input() instances; 

    constructor(private fakeDataService: FakeDataService) {}

    ngOnInit() {
        // this.data = this.fakeDataService.fakeInstances;
        this.dataSource = new MatTableDataSource(this.instances);
    }

    getDisplayedColumns() {
         const allColumns: string[] = [
             "select",
             "name",
             "version",
             "client",
             "impact"
         ];
        if(!this.patchImpactOnSpaces) {
            return allColumns.filter(col => col != 'impact')
        } else {
            return allColumns;
        }
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

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
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


