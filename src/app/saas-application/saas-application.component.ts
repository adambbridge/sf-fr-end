import { Component, OnInit } from '@angular/core';
import { $Application } from 'src/model/saasafras/saas.application';

@Component({
  selector: 'app-saas-application',
  templateUrl: './saas-application.component.html',
  styleUrls: ['./saas-application.component.css']
})
export class SaasApplicationComponent implements OnInit {
  saasApplication: $Application;

  constructor() { }

  ngOnInit() {
  }

}
