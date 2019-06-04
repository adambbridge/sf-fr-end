import { Component, OnInit, Input } from '@angular/core';
import { Solution } from 'src/model/saasafras/solution';

@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.css']
})
export class EditSolutionComponent implements OnInit {
  @Input()
  solution: Solution;

  constructor() { }

  ngOnInit() {
  }

}
