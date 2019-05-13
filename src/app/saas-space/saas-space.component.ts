import { Component, OnInit, Input } from '@angular/core';
import { $Space } from 'src/model/saasafras/saas.space';

@Component({
  selector: 'app-saas-space',
  templateUrl: './saas-space.component.html',
  styleUrls: ['./saas-space.component.css']
})
export class SaasSpaceComponent implements OnInit {
  @Input() saasSpace: $Space;

  constructor() { }

  ngOnInit() {
  }

}
