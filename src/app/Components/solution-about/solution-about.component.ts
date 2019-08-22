import { Component, OnInit, Input } from '@angular/core';
import { ISolutionInstanceViewModel } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-solution-about',
  templateUrl: './solution-about.component.html',
  styleUrls: ['./solution-about.component.css']
})
export class SolutionAboutComponent implements OnInit {
   @Input() solution: ISolutionInstanceViewModel;
   @Input() fakeVersions;

  constructor() { }

  ngOnInit() {
  }

}
