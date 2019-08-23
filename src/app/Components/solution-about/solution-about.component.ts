import { Component, OnInit, Input } from '@angular/core';
import { ISolutionViewModel } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-solution-about',
  templateUrl: './solution-about.component.html',
  styleUrls: ['./solution-about.component.css']
})
export class SolutionAboutComponent implements OnInit {
   @Input() solution: ISolutionViewModel;
   @Input() fakeVersions;

  constructor() { }

  ngOnInit() {
  }

}
