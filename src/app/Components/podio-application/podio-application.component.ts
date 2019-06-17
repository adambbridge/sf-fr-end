import { Component, OnInit, Input } from '@angular/core';
import { Application } from 'src/model/podio/application';

@Component({
  selector: 'app-podio-application',
  templateUrl: './podio-application.component.html',
  styleUrls: ['./podio-application.component.css']
})
export class PodioApplicationComponent implements OnInit {
  @Input() application: Application;

  constructor() { }

  ngOnInit() {
  }

}
