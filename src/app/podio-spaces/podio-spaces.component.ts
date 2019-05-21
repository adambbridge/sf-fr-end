import { Component, OnInit, Input } from '@angular/core';
import { Space, Spaces } from 'src/model/podio/space';
import { Observable } from 'rxjs';
import { PodioService } from '../services/podio.service';

@Component({
  selector: 'app-podio-spaces',
  templateUrl: './podio-spaces.component.html',
  styleUrls: ['./podio-spaces.component.css']
})
export class PodioSpacesComponent implements OnInit {
  @Input()
  orgId: Number;
  spaces: Observable<Space[]>;

  constructor(private _podioService: PodioService) {}

  ngOnInit() {
    this.spaces = this._podioService.GetWorkspacesInOrg(this.orgId);

    }
}

