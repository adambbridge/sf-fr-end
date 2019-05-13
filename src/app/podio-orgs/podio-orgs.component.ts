import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { PodioService } from '../services/podio.service';
import { Org } from 'src/model/podio/organization';

@Component({
  selector: 'app-podio-orgs',
  template: `
  <app-podio-org *ngFor="let org of orgs"
  [org]="org"
  (selected)="onSelected($event)">
  </app-podio-org>
    `,
  styleUrls: ['./podio-orgs.component.css']
})
export class PodioOrgsComponent implements OnInit {
  orgs: Org[];

  constructor(private _podioService: PodioService) {
  }

  // use varies?
  onSelected(org: Org) {
    console.log('received selection: ' + org.name);
  }

  ngOnInit() {
    // this should be replaced with actual selection functionality
    this._podioService.GetUserOrgs().subscribe({next: (os: Org[]) => {
      this.orgs = os;
      console.log('received new org: ' + os[0].name);
      // this.selectedOrg.emit(os[0]);
    }});
  }

}
