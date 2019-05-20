import { Component, OnInit, Input } from '@angular/core';
import { SaasafrasService } from '../services/saasafras.service';
import { $Space } from 'src/model/saasafras/saas.space';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Solution } from 'src/model/saasafras/solution';
@Component({
  selector: 'app-saas-spaces',
  templateUrl: './saas-spaces.component.html',
  styleUrls: ['./saas-spaces.component.css']
})
export class SaasSpacesComponent implements OnInit {
  @Input()
  solutionId: string;
  saasSpaces: Observable<$Space[]>;

  constructor(private _saasService: SaasafrasService) {
  }
  mapSpaces = map((solution: Solution) => {
    return solution.workspaces;
  });

  ngOnInit() {
    this.saasSpaces = this.mapSpaces(this._saasService.GetSolution(this.solutionId, true));
  }

}
