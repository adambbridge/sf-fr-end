import { PodioOrgDetailComponent } from './Components/podio-org-detail/podio-org-detail.component';
import { ClientComponent } from './Components/client/client.component';
import { NewClientComponent } from './Components/new-client/new-client.component';
import { ClientsComponent } from './Components/clients/clients.component';


import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { PodioAssetsComponent } from "./Components/podio-assets/podio-assets.component";
import { Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { SolutionsComponent } from "./Components/solutions/solutions.component";
import { AuthenticatingComponent } from "./Components/authenticating/authenticating.component";
import { AuthGuard } from "./guards/auth-guard.service";

import { SolutionComponent } from "./Components/solution/solution.component";
import { ServiceAuthenticatingComponent } from "./Components/service-authenticating/service-authenticating.component";
import { PodioSpacesComponent } from "./Components/podio-spaces/podio-spaces.component";
import { PodioOrgsComponent } from "./Components/podio-orgs/podio-orgs.component";
import { NewSolutionComponent } from "./Components/new-solution/new-solution.component";

// removed auth for development convenience
// TODO re-add property canActivate: [AuthGuard] to relevant routes

export const APP_ROUTES: Routes = [
           {
               path: "login",
               component: LoginComponent,
               pathMatch: "full"
           },
           {
               path: "",
               component: WelcomeComponent,
               pathMatch: "full",
               canActivate: []
           },
           {
               path: "auth",
               component: AuthenticatingComponent
           },
           {
               path: "service-auth",
               component: ServiceAuthenticatingComponent
           },
           {
               path: "solutions/new",
               component: NewSolutionComponent,
               canActivate: []
           },
           {
               path: "solutions",
               component: SolutionsComponent,
               canActivate: []
           },
           {
               path: "solutions/:id",
               component: SolutionComponent,
               canActivate: []
           },
           {
               path: "spaces",
               component: PodioSpacesComponent,
               canActivate: []
           },
           {
               path: "orgs",
               component: PodioOrgsComponent,
               canActivate: []
           },
           {
               path: "podio",
               component: PodioAssetsComponent,
               canActivate: []
           },
           {
               path: "podio/:id",
               component: PodioOrgDetailComponent,
               canActivate: []
           },
           {
               path: "clients/new",
               component: NewClientComponent,
               canActivate: []
           },
           {
               path: "clients",
               component: ClientsComponent,
               canActivate: []
           },
           {
               path: "clients/:id",
               component: ClientComponent,
               canActivate: []
           },
           // { path: '', redirectTo: 'solutions', pathMatch: 'full' },
           { path: "**", component: PageNotFoundComponent }
       ];

// export const APP_ROUTES: Routes = [
//            {
//                path: "login",
//                component: LoginComponent,
//                pathMatch: "full"
//            },
//            {
//                path: "",
//                component: WelcomeComponent,
//                pathMatch: "full",
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "auth",
//                component: AuthenticatingComponent
//            },
//            {
//                path: "service-auth",
//                component: ServiceAuthenticatingComponent
//            },
//            {
//                path: "solutions/new",
//                component: NewSolutionComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "solutions",
//                component: SolutionsComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "solution",
//                component: SolutionComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "spaces",
//                component: PodioSpacesComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "orgs",
//                component: PodioOrgsComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "podio",
//                component: PodioAssetsComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "clients/new",
//                component: NewClientComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "clients",
//                component: ClientsComponent,
//                canActivate: [AuthGuard]
//            },
//            {
//                path: "clients/:id",
//                component: ClientComponent,
//                canActivate: [AuthGuard]
//            },
//            // { path: '', redirectTo: 'solutions', pathMatch: 'full' },
//            { path: "**", component: PageNotFoundComponent }
//        ];
