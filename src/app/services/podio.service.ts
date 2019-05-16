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

  constructor(private http: HttpClient) { }
  updateToken(token: string) {
    console.log('received token');
    this.token = token;
    this.refresh();
  }
  refresh() {
    console.log('refreshing podio resources');
    this.tokenEmitter.emit(this.token);
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

  GetAppsInWorkspace(spaceId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Application[]>('https://api.podio.com/app/space/' + spaceId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetApp(appId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Application>('https://api.podio.com/app/' + appId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

  GetFieldInApp(appId: Number, fieldId: Number) {
    const p = pipe(
      map((token: string) => this.http.get<Field>('https://api.podio.com/app/' + appId + '/field/' + fieldId, { // options
      headers: {
        ['Authorization']: 'OAuth2 ' + token
      }})),
      concatAll());
    return p(this.tokenEmitter);
  }

}
