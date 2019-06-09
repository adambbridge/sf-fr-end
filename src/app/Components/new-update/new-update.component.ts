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
    updateForm = this.fb.group({
        solution: ["", Validators.required],
        description: [""]
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private passedData: any,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.updateForm.controls.solution.setValue(
            this.passedData.solution.name
        );
    }

    onSubmit() {
        console.warn(this.updateForm.value);
        console.warn(this.updateForm.valid);
    }
}
