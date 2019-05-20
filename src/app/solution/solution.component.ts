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
  @Output() selectedSpaces = new EventEmitter<Space[]>();
  private _spaces = new Array<Space>();
  @ViewChild('panel') panel: MatExpansionPanel;

  private spaceMapper = map((spaces: Space[]) =>
  spaces.map( s =>
    new $Space( s.name, Number.parseInt(s.space_id, 10) , s, null)));

  constructor() {
  }

  ngOnInit() {
    this.panel.expanded = this.expanded;

  }
  addSpace(space: Space) {
    if (this._spaces.find(s => s.space_id === space.space_id)) {
      console.log('space ' + space.space_id + ' was already added.');
    } else {
    this._spaces.push(space);
    console.log('space ' + space.space_id + ' was added.');
    this.selectedSpaces.emit(this._spaces);
    }
  }
  removeSpace(space: Space) {
    if (this._spaces.find(s => s.space_id === space.space_id)) {
      this._spaces = this._spaces.filter(s => s.space_id !== space.space_id);
      console.log('space ' + space.space_id + ' was removed.');
      this.selectedSpaces.emit(this._spaces);
    } else {
    console.log('space ' + space.space_id + ' isn\'t in the list.');
    }
  }

  onSubmit(form: NgForm) {
    this.solution.name = form.value.name;
    this.solution.appId = this.getId(form.value.name);

    //
  }
  getId(name: string) {
    const id: string = uuid();
    console.log('creating soluionId: ' + id);
    return id;
  }

}
