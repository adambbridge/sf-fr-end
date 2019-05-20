import { Component, OnInit, Input } from '@angular/core';
import { Solution } from 'src/model/saasafras/solution';
import { $Space } from '../../model/saasafras/saas.space';
@Component({
  selector: 'app-new-solution',
  templateUrl: './new-solution.component.html',
  styleUrls: ['./new-solution.component.css']
})
export class NewSolutionComponent implements OnInit {
  @Input()
  workspaces = new Array<$Space>();
  @Input()
  solution = new Solution(null, 'MySolution', '0.0', this.workspaces);

  constructor() { }

  ngOnInit() {
  }

}
