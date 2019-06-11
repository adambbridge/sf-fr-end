import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';
import { Org } from 'src/model/podio/organization';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { Space } from 'src/model/podio/space';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-podio-org',
  templateUrl: './podio-org.component.html',
  styleUrls: ['./podio-org.component.css']
})
export class PodioOrgComponent implements OnInit {
  @Output() selectedSpaces = new EventEmitter<Space>();
  @Output() unselectedSpaces = new EventEmitter<Space>();

  @Input()
  org: Org;
  @Input()
  showDetail: boolean;
  @Input()
  hide: boolean;
  @Input()
  isSelected: boolean;

  constructor() { }

  Dect(isDetail: boolean) {
    this.showDetail = !isDetail;
  }

  toggleSelected(space: Space) {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      console.log('selecting space_id: ' + space.space_id);
      this.selectedSpaces.emit(space);
    } else {
      console.log('unselecting space_id: ' + space.space_id);
      this.unselectedSpaces.emit(space);
    }
  }

  ngOnInit() {
  }

}
