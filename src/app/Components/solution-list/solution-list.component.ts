import { Component, OnInit } from '@angular/core';
import { SaasafrasService } from '../../services/saasafras.service';
import { Solution, Solutions } from '../../../model/saasafras/solution';

@Component({
  selector: 'app-solution-list',
  templateUrl: './solution-list.component.html',
  styleUrls: ['./solution-list.component.css']
})
export class SolutionListComponent implements OnInit {
  solutions: Solutions;

  constructor(private saasafras: SaasafrasService) { }

  ngOnInit() {
    this.saasafras.GetSolutions().subscribe({
      next: (s) => this.solutions = s,
      error: (a) => console.error(a)
    });
  }

}
