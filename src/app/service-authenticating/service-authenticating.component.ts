import { Component, OnInit, Input, Inject} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from '../services/get-token.service';
import { AuthService } from '../services/auth.service';
// import { Observable } from 'node_modules/rxjs';
import { OAuthResponse } from 'src/model/podio/auth';
import { map, delay } from 'rxjs/operators';
import { JwtResponse, Jwt } from 'src/model/saasafras/jwt';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { SaasafrasService } from 'src/app/services/saasafras.service';
import { SaasafrasResponse } from 'src/model/saasafras/response';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { EnvironmentCredentialsRequest } from 'src/model/saasafras/environmentCredentialsRequest';

@Component({
  selector: 'app-service-authenticating',
  templateUrl: './service-authenticating.component.html',
  styleUrls: ['./service-authenticating.component.css']
})
export class ServiceAuthenticatingComponent implements OnInit {
  @Input()
  oauthResponse$: Observable<OAuthResponse>;
  stringConverter = map((s: string) => new OAuthResponse(s));
  saasafrasResponse$: Observable<SaasafrasResponse>;
  logOutUrl: SafeUrl;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _saasafrasService: SaasafrasService,
    private _authService: AuthService,
    private _router: Router,
    private dom: DomSanitizer,
    private route: ActivatedRoute) {
      //
      console.log('service-auth component constructor start...');
      this.oauthResponse$ = this.stringConverter(this.route.fragment);
      this.route.queryParams.subscribe({next: (p: Params) => {
        console.log('params = ' + JSON.stringify(p));
        const state = JSON.parse(p.state);
        if (state.solutionId) {
          console.log('adding credentials for solution: ' + state.solutionId + '/' + state.version);
          this.saasafrasResponse$ = this._saasafrasService.AddSolutionCredentials(
            p.code, state.solutionId, state.version, this.document.location.href);
        }
        if (state.clientId) {
          console.log('adding for client: ' + state.clientId + '/' + state.environmentId);
          const request = new EnvironmentCredentialsRequest(p.code, state.clientId, state.environmentId, this.document.location.href);
          this.saasafrasResponse$ = this._saasafrasService.AddEnvironmentCredentials(request);
        }
      }});
      this.saasafrasResponse$.subscribe({next: (r: SaasafrasResponse) => {
        console.log('saasafras response: ' + JSON.stringify(r));
        this.logOutUrl = this.dom.bypassSecurityTrustResourceUrl('https://podio.com/logout');
      }});
    }

  ngOnInit() {
  }
}

