import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spaces, Space } from '../../model/podio/space';
import { Org } from '../../model/podio/organization';
import { OAuthResponse } from 'src/model/podio/auth';
import { Subscriber, pipe } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PodioService {
  private tokenEmitter = new EventEmitter<string>();

  constructor(private http: HttpClient) { }
  updateToken(token: string) {
    console.log('received token');
    this.tokenEmitter.emit(token);
  }

  GetUserOrgs() {
    const p = pipe(
      map((token: string) => this.http.get<Org[]>('https://api.podio.com/org/', { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetOrg(orgId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Org>('https://api.podio.com/org/' + orgId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetWorkspacesInOrg(orgId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Space[]>('https://api.podio.com/org/' + orgId + '/space', { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetWorkspace(spaceId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Space>('https://api.podio.com/space/' + spaceId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

}
