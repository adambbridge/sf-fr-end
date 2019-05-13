import { Component, OnInit } from '@angular/core';
import { SaasafrasService } from '../../services/saasafras.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  constructor(private _versionService: SaasafrasService) { }

  ngOnInit() {
    const solution = document.getElementById('solutionVersion');
  }

  ButtonClicked() {
  }

  CreateVersion() {
    this._versionService.CreateVersion();
  }

}
