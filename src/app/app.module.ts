
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { APP_ROUTES } from './app.routes';
import { UserIconComponent } from './Components/user-icon/user-icon.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { SubmitButtonComponent } from './Components/submit-button/submit-button.component';
import { LogoComponent } from './Components/logo/logo.component';
import { FooterComponent } from './Components/footer/footer.component';
import { VersionresultsComponent } from './Components/versionresults/versionresults.component';
import { AuthenticatingComponent } from './Components/authenticating/authenticating.component';
import { FeedbackBoxComponent } from './Components/feedback-box/feedback-box.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { LoginComponent } from './Components/login/login.component';
import { PodioCredentialComponent } from './podio-credential/podio-credential.component';
import { FormsModule } from '@angular/forms';
import { ServiceAuthenticatingComponent } from './service-authenticating/service-authenticating.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { SolutionsComponent } from './Components/solutions/solutions.component';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { PodioSpacesComponent } from './podio-spaces/podio-spaces.component';
import { PodioOrgsComponent } from './podio-orgs/podio-orgs.component';
import { PodioOrgComponent } from './podio-org/podio-org.component';
import { PodioSpaceComponent } from './podio-space/podio-space.component';
import { SolutionComponent } from './solution/solution.component';
import { SaasSpaceComponent } from './saas-space/saas-space.component';
import { SaasApplicationComponent } from './saas-application/saas-application.component';
import { SaasFieldComponent } from './saas-field/saas-field.component';
import { PodioApplicationComponent } from './podio-application/podio-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserIconComponent,
    NavbarComponent,
    FeedbackComponent,
    AccountsComponent,
    SettingsComponent,
    SubmitButtonComponent,
    LogoComponent,
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
    PodioApplicationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
