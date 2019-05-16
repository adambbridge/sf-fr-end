import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Org } from 'src/model/podio/organization';

@Component({
  selector: 'app-podio-org',
  templateUrl: './podio-org.component.html',
  styleUrls: ['./podio-org.component.css']
})
export class PodioOrgComponent implements OnInit {
  @Output() selected = new EventEmitter<Org>();

  @Input()
  org: Org;
  @Input()
  showDetail: boolean;

  constructor() { }
  select() {
    console.log('selecting...');
    this.selected.emit(this.org);
  }

  ngOnInit() {
  }

}
