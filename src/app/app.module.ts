import { InstancesComponent } from './Components/instances/instances.component';
/** Angular */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";


import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
} from "@angular/material";
import { MatNativeDateModule } from "@angular/material/";
import { MatDatepickerModule } from "@angular/material/datepicker";


/** Components */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SaasafrasMenuComponent } from './Components/user-icon/user-icon.component';
import { AuthenticatingComponent } from './Components/authenticating/authenticating.component';
import { LoginComponent } from './Components/login/login.component';
import { SolutionsComponent } from './Components/solutions/solutions.component';
import { AuthViewComponent } from "./Components/auth-view/auth-view.component";
import { PodioCredentialComponent } from "./Components/podio-credential/podio-credential.component";
import { ServiceAuthenticatingComponent } from "./Components/service-authenticating/service-authenticating.component";
import { PodioSpacesComponent } from './Components/podio-spaces/podio-spaces.component';
import { SolutionComponent } from './Components/solution/solution.component';
import { NewSolutionComponent } from './Components/new-solution/new-solution.component';
import { EditSolutionComponent } from './Components/edit-solution/edit-solution.component';
import { NewUpdateComponent } from "./Components/new-update/new-update.component";
import { NewDeploymentComponent } from "./Components/new-deployment/new-deployment.component";
import { NewPatchComponent } from "./Components/new-patch/new-patch.component";
import { HeaderComponent } from "./Components/header/header.component";
import { SidenavListComponent } from "./Components/sidenav-list/sidenav-list.component";
import { PodioAssetsComponent } from "./Components/podio-assets/podio-assets.component";
import { CardCollectionComponent } from "./Components/card-collection/card-collection.component";
import { CardComponent } from "./Components/card/card.component";
import { MatChipCustomComponent } from "./Components/mat-chip-custom/mat-chip-custom.component";
import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { SolutionTasksComponent } from "./Components/solution-tasks/solution-tasks.component";
import { SolutionHistoryComponent } from "./Components/solution-history/solution-history.component";
import { SolutionAboutComponent } from "./Components/solution-about/solution-about.component";

/** Other */
import { APP_ROUTES } from "./app.routes";
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { AuthGuard } from "./guards/auth-guard.service";
import { ClientsComponent } from './Components/clients/clients.component';
import { NewClientComponent } from './Components/new-client/new-client.component';
import { ClientComponent } from './Components/client/client.component';
import { PodioOrgDetailComponent } from './Components/podio-org-detail/podio-org-detail.component';
import { ConfirmationDialogComponent } from './Components/confirmation-dialog/confirmation-dialog.component';
import { AddAccountComponent } from './Components/add-account/add-account.component';
import { PodioAccountsComponent } from './Components/podio-accounts/podio-accounts.component';
import { PodioAccountDetailComponent } from './Components/podio-account-detail/podio-account-detail.component';
import { EditClientComponent } from './Components/edit-client/edit-client.component';
import { WorkspaceNameFilter } from './pipes/filter-pipe.pipe';
import { NewClientConfirmationComponent } from './Components/new-client-confirmation/new-client-confirmation.component';
import { OnboardingSlideshowComponent } from './Components/onboarding-slideshow/onboarding-slideshow.component';
import { HelpMenuComponent } from './Components/help-menu/help-menu.component';
@NgModule({
    declarations: [
        /** Components */
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        SaasafrasMenuComponent,
        AuthenticatingComponent,
        AuthViewComponent,
        PodioCredentialComponent,
        ServiceAuthenticatingComponent,
        SolutionsComponent,
        PodioSpacesComponent,
        SolutionComponent,
        NewSolutionComponent,
        EditSolutionComponent,
        NewUpdateComponent,
        NewDeploymentComponent,
        NewPatchComponent,
        HeaderComponent,
        SidenavListComponent,
        PodioAssetsComponent,
        CardCollectionComponent,
        CardComponent,
        MatChipCustomComponent,
        WelcomeComponent,
        SolutionTasksComponent,
        SolutionHistoryComponent,
        SolutionAboutComponent,
        ClientsComponent,
        NewClientComponent,
        ClientComponent,
        PodioOrgDetailComponent,
        InstancesComponent,
        ConfirmationDialogComponent,
        AddAccountComponent,
        PodioAccountsComponent,
        PodioAccountDetailComponent,
        EditClientComponent,
        WorkspaceNameFilter,
        NewClientConfirmationComponent,
        OnboardingSlideshowComponent,
        HelpMenuComponent
    ],
    imports: [
        /** Modules */
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        RouterModule.forRoot(APP_ROUTES),
        HttpClientModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxMaterialTimepickerModule
    ],
    providers: [AuthGuard, MatDatepickerModule, WorkspaceNameFilter],
    bootstrap: [AppComponent],
    entryComponents: [
        NewUpdateComponent,
        NewDeploymentComponent,
        NewPatchComponent,
        AddAccountComponent,
        ConfirmationDialogComponent,
        NewClientConfirmationComponent,
        OnboardingSlideshowComponent
    ]
})
export class AppModule {}
