import {
    FakeDataService,
    ISolutionInstanceViewModel
} from "./../../services/fake-data.service";
import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TooltipPosition } from "@angular/material/tooltip";
import { NewPatchComponent } from "src/app/Components/new-patch/new-patch.component";
import { MatDialog } from "@angular/material";

@Component({
    selector: "app-instances",
    templateUrl: "instances.component.html"
})
export class InstancesComponent implements OnInit {
    dataSource;
    selection = new SelectionModel(true, []);
    tooltipPosition = "above";
    @Input() patchImpactOnSpaces;
    @Input() instances;
    @Input() instancePreselection?: boolean = false;
    @Input() showSearchBox?: boolean = true;
    @Input() showButton?: boolean = true;
    private _selectedInstances: ISolutionInstanceViewModel[];
    @Output() selectedInstances = new EventEmitter<
        ISolutionInstanceViewModel[]
    >();

    constructor(
        private fakeDataService: FakeDataService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.instances);
        if (this.instancePreselection) {
            this._selectAll();
        }
    }

    getDisplayedColumns() {
        const allColumns: string[] = [
            "select",
            "name",
            "version",
            "client",
            "impact"
        ];
        if (!this.patchImpactOnSpaces) {
            return allColumns.filter((col) => col != "impact");
        } else {
            return allColumns;
        }
    }

    onCheckboxChange(row) {
        this.selection.toggle(row);
        this._emitSelectedInstances();
    }

    rowIsSelected(row) {
        console.log(this.selection.selected)
        return this.selection.isSelected(row);
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this._selectAll();
        this._emitSelectedInstances();
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    onPatchSelectedClick() {
        console.log("lets launch patch dialog");
        this.dialog.open(NewPatchComponent, {
            data: {
                preSelectedInstances: this.selection.selected
            }
        });
    }

    createCheckboxAriaLabel(row?): string {
        if (!row) {
            return `${this.isAllSelected() ? "select" : "deselect"} all`;
        }
        return `${
            this.selection.isSelected(row) ? "deselect" : "select"
        } row ${row.position + 1}`;
    }

    private _emitSelectedInstances() {
        this._selectedInstances = this.selection.selected;
        this.selectedInstances.emit(this._selectedInstances);
        console.log(this.selection.selected);
    }

    private _selectAll() {
        this.dataSource.data.forEach((row) => this.selection.select(row));
    }
}
