import { IClientViewModel } from "./../../services/fake-data.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { UtilsService } from "./../../services/utils.service";
import { FakeDataService } from "src/app/services/fake-data.service";

@Component({
    selector: "app-edit-client",
    templateUrl: "./edit-client.component.html",
    styleUrls: ["./edit-client.component.css"]
})
export class EditClientComponent implements OnInit {
    id;
    client: IClientViewModel;
    clients: IClientViewModel[];
    updateForm: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _fb: FormBuilder,
        private fakeDataService: FakeDataService,
        private _utilsService: UtilsService
    ) {}

    ngOnInit() {
        this.clients = this.fakeDataService.fakeClients;
        this.id = this.route.snapshot.paramMap.get("id");
        this.client = this.clients.find((c) => c.id === this.id);
        this._createForm(this.client);
    }

    onSubmit() {
        console.log("form value:", this.updateForm.value);
        console.log("form valid:", this.updateForm.valid);
        this.fakeDataService.updateClient(this.updateForm.value);
        // on success
        this._utilsService.openSnackBar("changes saved");
        this.router.navigate(["/clients/", this.client.id]);
    }

    private _createForm(c: IClientViewModel) {
        this.updateForm = this._fb.group({
            id: [c.id, Validators.required],
            contact: [c.contact, Validators.required],
            company: [c.company ? c.company : ""],
            email: [c.email, Validators.required],
            notes: [c.notes ? c.notes : ""]
        });
    }
}
