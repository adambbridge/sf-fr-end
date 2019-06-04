import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SolutionsComponent } from './Components/solutions/solutions.component';
import { AuthenticatingComponent } from "./Components/authenticating/authenticating.component";

import { SolutionComponent } from "./Components/solution/solution.component";
import { ServiceAuthenticatingComponent } from './Components/service-authenticating/service-authenticating.component';
import { PodioSpacesComponent } from './Components/podio-spaces/podio-spaces.component';
import { PodioOrgsComponent } from './Components/podio-orgs/podio-orgs.component';
import { NewSolutionComponent } from './Components/new-solution/new-solution.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthenticatingComponent },
  { path: 'service-auth', component: ServiceAuthenticatingComponent },
  { path: 'solutions/new', component: NewSolutionComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'spaces', component: PodioSpacesComponent },
  { path: 'orgs', component: PodioOrgsComponent },
  { path: '', redirectTo: 'solutions', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
