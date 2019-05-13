import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OAuthResponse } from 'src/model/podio/auth';
import { JwtResponse, Jwt } from 'src/model/saasafras/jwt';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, pipe, concat, interval, from, of, merge } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  JwtResponse$ = new Observable<JwtResponse>();
  // OAuthObserver = {
  //   next(o: OAuthResponse) {
  //     // console.log(JSON.stringify(o));
  //     console.log('setting podio token');
  //     if (o.token) {
  //       this.accessToken = o.token;
  //     }
  //   }};

  constructor(private http: HttpClient) {
  }

  GetToken(response: OAuthResponse): Observable<JwtResponse> {
    // console.log('entered GetToken()');
    return this.http.post<JwtResponse>(environment.saasafras.api.url + 'auth',
      response,
      { headers: {
        ['Content-Type']: 'application/json',
        ['Accept']: 'application/json'
      }});
  }
}

