import { Component, OnInit, Input } from '@angular/core';
import { Space } from "../../../model/podio/space";
import { PodioService } from "../../services/podio.service";
import { Application } from 'src/model/podio/application';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-podio-space',
  templateUrl: './podio-space.component.html',
  styleUrls: ['./podio-space.component.css']
})
export class PodioSpaceComponent implements OnInit {
  @Input()
  space: Space;
  applications: Observable<Application[]>;

  constructor(private _podioService: PodioService) {
  }

  ngOnInit() {
    this.applications = this._podioService.GetAppsInWorkspace(this.space.space_id);
  }

}
