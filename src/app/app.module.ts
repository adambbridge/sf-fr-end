/** Angular */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomMaterialModule } from "./custom-material/custom-material.module";

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

/** Other */
import { APP_ROUTES } from "./app.routes";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NewUpdateComponent } from './Components/new-update/new-update.component';
import { NewDeploymentComponent } from './Components/new-deployment/new-deployment.component';
import { NewPatchComponent } from './Components/new-patch/new-patch.component';


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
        NewPatchComponent
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
        MatListModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        NewUpdateComponent,
        NewDeploymentComponent,
        NewPatchComponent
    ]
})
export class AppModule {}
