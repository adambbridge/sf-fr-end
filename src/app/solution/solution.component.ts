import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Solution } from 'src/model/saasafras/solution';
import { NgForm } from '@angular/forms';
import { v4 as uuid } from 'node_modules/uuid';
import { $Space } from 'src/model/saasafras/saas.space';
import { map } from 'rxjs/operators';
import { Space } from 'src/model/podio/space';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() solution: Solution;
  @Input() showForm: boolean;
  @Input() expanded: boolean;
  @ViewChild('panel') panel: MatExpansionPanel;

  constructor() {
  }

  ngOnInit() {
    this.panel.expanded = this.expanded;

  }

  // getId(name: string) {
  //   const id: string = uuid();
  //   console.log('creating soluionId: ' + id);
  //   return id;
  // }

}
