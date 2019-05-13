import { Component, OnInit, Input } from '@angular/core';
import { Solution } from 'src/model/saasafras/solution';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() solution: Solution;

  constructor() { }

  ngOnInit() {
  }

}
