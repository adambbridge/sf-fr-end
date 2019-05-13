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
  mySolutions: Observable<Solutions>;

  constructor(private _authService: AuthService,
     private _solutionService: SaasafrasService) {
       this.mySolutions = this._solutionService.GetSolutions();
       this.mySolutions.subscribe({next: (s: Solutions) => {
         this.solutions = s.solutions;
       }});
     }

  ngOnInit() {
  }
}
