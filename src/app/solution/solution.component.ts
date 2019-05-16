import { Component, OnInit, Input } from '@angular/core';
import { Solution } from 'src/model/saasafras/solution';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() solution: Solution;
  @Input() showForm: boolean;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.solution.name = form.value.name;
    this.solution.appId = this.getId(form.value.name);
    //
  }
  getId(name: string) {
    return 'different_than_name-' + name;
  }

}
