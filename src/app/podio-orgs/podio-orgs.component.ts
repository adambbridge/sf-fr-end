import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PodioService } from '../services/podio.service';
import { Org } from 'src/model/podio/organization';

@Component({
  selector: 'app-podio-orgs',
  template: `
  <h3>Organizations</h3>
  <mat-selection-list >
    <mat-list-option *ngFor="let org of orgs">
      <mat-icon mat-list-icon>group_work</mat-icon>
      <app-podio-org [org]="org" [showDetail]="showDetail" (selected)="onSelected($event)">
  </app-podio-org>
    </mat-list-option>
  </mat-selection-list>
    `,
  styleUrls: ['./podio-orgs.component.css']
})
export class PodioOrgsComponent implements OnInit {
  @Input()
  showDetail: boolean;
  orgs$: Observable<Org[]>;
  orgs: Org[];

  constructor(private _podioService: PodioService) {
    // this should be replaced with actual selection functionality
    this.orgs$ = this._podioService.GetUserOrgs();
    this.orgs$.subscribe({next: (os: Org[]) => {
      console.log('PodioOrgComponent received new org: ' + os[0].name);
      this.orgs = os;
      // this.selectedOrg.emit(os[0]);
    }});
    this._podioService.refresh();
  }

  // use varies?
  onSelected(org: Org) {
    console.log('received selection: ' + org.name);
  }

  ngOnInit() {
  }

}
