import { Component, OnInit, Output, EventEmitter, Input, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { PodioService } from '../services/podio.service';
import { Org } from 'src/model/podio/organization';
import { PodioOrgComponent } from '../podio-org/podio-org.component';
import { Space } from 'src/model/podio/space';

@Component({
  selector: 'app-podio-orgs',
  templateUrl: 'podio-orgs.component.html',
  styleUrls: ['./podio-orgs.component.css']
})
export class PodioOrgsComponent implements OnInit {
  @ViewChildren('childOrgs') components: QueryList<PodioOrgComponent>;
  @Input()
  showDetail: boolean = true;
  orgs$: Observable<Org[]>;
  orgs: Org[];
  @Output() selectedSpaces = new EventEmitter<Space>();
  @Output() unselectedSpaces = new EventEmitter<Space>();

  constructor(private _podioService: PodioService) {
    // this should be replaced with actual selection functionality
    this.orgs$ = this._podioService.GetUserOrgs();
    this.orgs$.subscribe({next: (os: Org[]) => {
      console.log('PodioOrgsComponent received ' + os.length + ' orgs.');
      this.orgs = os.filter(o => o.spaces != null && o.spaces.length > 0);
      // this.selectedOrg.emit(os[0]);
    }});
    this._podioService.refresh();
  }

  // use varies?
  onSelected(org: Org, selecting: boolean) {
    if (selecting) {
      console.log('onSelected received org_id: ' + org.org_id);
      this.components.forEach(comp => {
          comp.hide = comp.org.org_id !== org.org_id;
        });
      } else {
      console.log('onSelected received null');
      this.components.forEach(comp => {
        comp.hide = false;
      });
    }
  }

  onSpaceSelected(space: Space) {
    this.selectedSpaces.emit(space);
          this.showDetail = true;

  }

  onSpaceUnselected(space: Space) {
    this.unselectedSpaces.emit(space);
  }

  ngOnInit() {
      this.showDetail = true;
  }

}
