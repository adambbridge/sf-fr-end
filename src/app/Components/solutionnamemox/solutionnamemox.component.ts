import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutionnamemox',
  templateUrl: './solutionnamemox.component.html',
  styleUrls: ['./solutionnamemox.component.css']
})
export class SolutionnamemoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  GenerateSolutionID() {
    const inputBox = (<HTMLInputElement>document.getElementById('solutionName'));
    document.getElementById('typing').innerHTML = 'Sol-' + inputBox.value + '-SaaS';
  }

}
