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
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { FooterComponent } from './Components/footer/footer.component';
import { VersionresultsComponent } from './Components/versionresults/versionresults.component';
import { AuthenticatingComponent } from './Components/authenticating/authenticating.component';
import { FeedbackBoxComponent } from './Components/feedback-box/feedback-box.component';
import { LoginComponent } from './Components/login/login.component';
import { SolutionsComponent } from './Components/solutions/solutions.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { AuthViewComponent } from "./Components/auth-view/auth-view.component";
import { PodioCredentialComponent } from "./Components/podio-credential/podio-credential.component";
import { ServiceAuthenticatingComponent } from "./Components/service-authenticating/service-authenticating.component";
import { PodioSpacesComponent } from './Components/podio-spaces/podio-spaces.component';
import { PodioOrgsComponent } from './Components/podio-orgs/podio-orgs.component';
import { PodioOrgComponent } from './Components/podio-org/podio-org.component';
import { PodioSpaceComponent } from './Components/podio-space/podio-space.component';
import { SolutionComponent } from './Components/solution/solution.component';
import { SaasSpaceComponent } from './Components/saas-space/saas-space.component';
import { SaasApplicationComponent } from './Components/saas-application/saas-application.component';
import { SaasFieldComponent } from './Components/saas-field/saas-field.component';
import { PodioApplicationComponent } from './Components/podio-application/podio-application.component';
import { SaasSpacesComponent } from './Components/saas-spaces/saas-spaces.component';
import { NewSolutionComponent } from './Components/new-solution/new-solution.component';
import { EditSolutionComponent } from './Components/edit-solution/edit-solution.component';
import { DeploySolutionComponent } from './Components/deploy-solution/deploy-solution.component';
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
import { SolutionSpacesComponent } from "./Components/solution-spaces/solution-spaces.component";
import { SolutionHistoryComponent } from "./Components/solution-history/solution-history.component";
import { SolutionAboutComponent } from "./Components/solution-about/solution-about.component";

/** Other */
import { APP_ROUTES } from "./app.routes";
import { CustomMaterialModule } from "./custom-material/custom-material.module";
import { AuthGuard } from "./guards/auth-guard.service";
import { ClientsComponent } from './Components/clients/clients.component';
import { NewClientComponent } from './Components/new-client/new-client.component';
import { ClientComponent } from './Components/client/client.component';
import { AddKnownOrgComponent } from "./Components/add-known-org/add-known-org.component";
import { PodioOrgDetailComponent } from './Components/podio-org-detail/podio-org-detail.component';
import { ConfirmationDialogComponent } from './Components/confirmation-dialog/confirmation-dialog.component';
@NgModule({
    declarations: [
        /** Components */
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        SaasafrasMenuComponent,
        NavbarComponent,
        FeedbackComponent,
        AccountsComponent,
        SettingsComponent,
        FooterComponent,
        VersionresultsComponent,
        AuthenticatingComponent,
        FeedbackBoxComponent,
        AuthViewComponent,
        PodioCredentialComponent,
        ServiceAuthenticatingComponent,
        SolutionsComponent,
        TaskListComponent,
        PodioSpacesComponent,
        PodioOrgsComponent,
        PodioOrgComponent,
        PodioSpaceComponent,
        SolutionComponent,
        SaasSpaceComponent,
        SaasApplicationComponent,
        SaasFieldComponent,
        PodioApplicationComponent,
        SaasSpacesComponent,
        NewSolutionComponent,
        EditSolutionComponent,
        DeploySolutionComponent,
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
        SolutionSpacesComponent,
        SolutionHistoryComponent,
        SolutionAboutComponent,
        ClientsComponent,
        NewClientComponent,
        ClientComponent,
        AddKnownOrgComponent,
        PodioOrgDetailComponent,
        InstancesComponent,
        ConfirmationDialogComponent
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
        MatDatepickerModule
    ],
    providers: [AuthGuard, MatDatepickerModule],
    bootstrap: [AppComponent],
    entryComponents: [
        NewUpdateComponent,
        NewDeploymentComponent,
        NewPatchComponent,
        AddKnownOrgComponent,
        ConfirmationDialogComponent
    ]
})
export class AppModule {}
