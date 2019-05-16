import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SaasafrasService } from '../../services/saasafras.service';
import { Solutions, Solution } from 'src/model/saasafras/solution';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit { 
  solutions: Solution[];
  newSolution = new Solution('n/a', 'New Solution', '0.0', null);
  showNewSolution: boolean;
  showNewIcon = 'expand_more';

  mySolutions: Observable<Solutions>;

  constructor(private _authService: AuthService,
     private _solutionService: SaasafrasService) {
       this.mySolutions = this._solutionService.GetSolutions();
       this.mySolutions.subscribe({next: (s: Solutions) => {
         this.solutions = s.solutions;
       }});
     }

  toggleNewSolution(show: boolean) {
    console.log('settings showNewSolution to: ' + show);
    this.showNewSolution = show;
    this.showNewIcon = show ? 'expand_less' : 'expand_more';
  }
  ngOnInit() {
  }
}
