import { Component, OnInit, Input } from '@angular/core';
import { Space } from '../../model/podio/space';
@Component({
  selector: 'app-podio-space',
  templateUrl: './podio-space.component.html',
  styleUrls: ['./podio-space.component.css']
})
export class PodioSpaceComponent implements OnInit {
  @Input()
  space: Space;

  constructor() { }

  ngOnInit() {
  }

}
