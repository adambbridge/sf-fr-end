import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spaces, Space } from '../../model/podio/space';
import { Org } from '../../model/podio/organization';
import { OAuthResponse } from 'src/model/podio/auth';
import { Subscriber, pipe } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';
import { Application } from 'src/model/podio/application';
import { Field } from 'src/model/podio/field';

@Injectable({
  providedIn: 'root'
})
export class PodioService {
  private token: string;
  private tokenEmitter = new EventEmitter<string>();
  private TOKEN_NAME = 'x-saasafras-podio-token';
  private BASE_URL = 'https://api.podio.com/';

  constructor(private http: HttpClient) {
    const _token = sessionStorage.getItem(this.TOKEN_NAME);
    if (_token) {
      this.updateToken(_token);
    }
  }
  updateToken(token: string) {
    console.log('received token');
    this.token = token;
    this.refresh();
    sessionStorage.setItem(this.TOKEN_NAME, token);
  }
  refresh() {
    console.log('refreshing podio resources');
    this.tokenEmitter.emit(this.token);
  }

  GetUserOrgs() {
    const p = pipe(
      map((token: string) => this.http.get<Org[]>(this.BASE_URL + 'org/', { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetOrg(orgId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Org>(this.BASE_URL + 'org/' + orgId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetWorkspacesInOrg(orgId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Space[]>(this.BASE_URL + 'org/' + orgId + '/space', { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetWorkspace(spaceId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Space>(this.BASE_URL + 'space/' + spaceId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetAppsInWorkspace(spaceId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Application[]>(this.BASE_URL + 'app/space/' + spaceId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetApp(appId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Application>(this.BASE_URL + 'app/' + appId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetFieldInApp(appId: Number, fieldId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Field>(this.BASE_URL + 'app/' + appId + '/field/' + fieldId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

}
