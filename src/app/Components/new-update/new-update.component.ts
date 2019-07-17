import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: "app-new-update",
    templateUrl: "./new-update.component.html",
    styleUrls: ["./new-update.component.css"]
})
export class NewUpdateComponent implements OnInit {
    solution;
    updateForm;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _passedData: any,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.solution = this._passedData.solution;
        this.updateForm = this.fb.group({
            solution: ["", Validators.required],
            source: [""],
            notes: [""]
        });
        this.updateForm.controls.solution.setValue(
            this._passedData.solution.name
        );
    }

    onSubmit() {
        console.warn(this.updateForm.value);
        console.warn(this.updateForm.valid);
    }
}
