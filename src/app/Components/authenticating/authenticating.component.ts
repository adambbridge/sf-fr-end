import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../services/get-token.service';
import { AuthService } from '../../services/auth.service';
// import { Observable } from 'node_modules/rxjs';
import { OAuthResponse } from 'src/model/podio/auth';
import { map, delay } from 'rxjs/operators';
import { JwtResponse, Jwt } from 'src/model/saasafras/jwt';
import { PodioService } from 'src/app/services/podio.service';
import { Observable, of, pipe, merge } from 'rxjs';
import { SaasafrasService } from 'src/app/services/saasafras.service';

@Component({
  selector: 'app-authenticating',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.css']
})
export class AuthenticatingComponent implements OnInit {
  IsLoggedIn: Observable<boolean>;
  @Input()
  oauthResponse$: Observable<OAuthResponse>;
  stringConverter = map((oauthResponseFragment: string) => {
        console.log('parsing ' + JSON.stringify(oauthResponseFragment));
        const kvs = oauthResponseFragment.split('&');
        const response = new OAuthResponse();
        kvs.forEach(pair => {
          const kv = pair.split('=');
          switch (kv[0]) {
            case 'code':
              response.code = kv[1];
              break;
            case 'access_token':
              response.AccessToken = kv[1];
              break;
            case 'state':
              response.state = kv[1];
              break;
            case 'refresh_token':
              response.RefreshToken = kv[1];
              break;
            case 'expires_in':
              response.Expiration = Number.parseInt(kv[1], 10);
              break;
          }
        });
    return response;
  });

  constructor(
    private _podioService: PodioService,
    private _saasafrasService: SaasafrasService,
    private _tokenService: TokenService,
    private _authService: AuthService,
    private _router: Router,
    private route: ActivatedRoute) {
      //
      console.log('auth component constructor start...');
      this.oauthResponse$ = this.route.fragment.pipe(this.stringConverter);

      this.oauthResponse$.subscribe({next: (o: OAuthResponse) => {
        this._podioService.updateToken(o.AccessToken);
        this._tokenService.JwtResponse$ = this._tokenService.GetToken(o);
      }});

    // pipe to use the returned jwt to populate the token
      const mapResponse = pipe(
        map((j: JwtResponse) => j.token),
        map((s: string) => {
          const t = this._authService.setAndDecode(s);
          return t;
        }));

    // emit the received jwt for other listeners
      mapResponse(this._tokenService.JwtResponse$).subscribe({
        next: (j: Jwt) => {
          console.log('received jwt');
          this._authService.tokenEvent.emit(j);
        }
      });

      this._authService.IsAuth$.subscribe({next: (b: boolean) => {
      // console.log('IsAuth$ = ' + b);
      if (b) {
        this._router.navigate(['']);
      } else {
        this._router.navigate(['login']);
      }
      }});
    }

  ngOnInit() {
  }
}

