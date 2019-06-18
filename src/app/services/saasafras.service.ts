import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PodioService } from './podio.service';
import { environment } from 'src/environments/environment.prod';
import { Solution, Solutions } from '../../model/saasafras/solution';
import { SaasafrasResponse } from '../../model/saasafras/response';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Jwt } from 'src/model/saasafras/jwt';
import { Client, Clients } from 'src/model/saasafras/client';
import { EnvironmentCredentialsRequest } from 'src/model/saasafras/environmentCredentialsRequest';
import { SolutionCreationRequest, SolutionCreationResponse } from 'src/model/saasafras/solutionCreationRequest';
@Injectable({
  providedIn: 'root'
})
export class SaasafrasService {
  jwt: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.tokenHook().subscribe({
      next: (t: Jwt) => {
        this.jwt = sessionStorage.getItem('jwt');
      }
    });
  }
  private defaultHeaders() { return new HttpHeaders({ 'x-saasafras-jwt': this.jwt }); }

  // AddEnvironmentCredentials_old(code: string, clientId: string, environmentId: string, redirectUri: string): Observable<SaasafrasResponse> {
  //   console.log('AddEnvironmentCredentials');
  //   return this.http.post<SaasafrasResponse>(environment.saasafras.api.url + 'client/' + clientId + '/env/' + environmentId + '/token',
  //     { code: code, redirectUri: redirectUri },
  //     {
  //       headers: this.defaultHeaders()
  //     });
  // }

  AddEnvironmentCredentials(request: EnvironmentCredentialsRequest): Observable<SaasafrasResponse> {
    console.log('AddEnvironmentCredentials');
    return this.http.post<SaasafrasResponse>(
      environment.saasafras.api.url + 'client/' + request.clientId +
      '/env/' + request.environmentId + '/token',
      { code: request.code, redirectUri: request.redirectUri },
      {
        headers: this.defaultHeaders()
      });
  }

  AddSolutionCredentials(code: string, solutionId: string, version: string, redirectUri: string): Observable<SaasafrasResponse> {
    console.log('AddSolutionCredentials');
    return this.http.post<SaasafrasResponse>(environment.saasafras.api.url + 'app/' + solutionId + '/token?version=' + version,
      { code: code, redirectUri: redirectUri },
      {
        headers: this.defaultHeaders()
      });
  }

  CreateSolution(request: SolutionCreationRequest) {
    return this.http.post<SolutionCreationResponse>(environment.saasafras.api.url + 'apps', request,
    {
      headers: this.defaultHeaders()
    });
}

  GetSolutions() {
    return this.http.get<Solutions>(environment.saasafras.api.url + 'apps',
      {
        headers: this.defaultHeaders()
      });
  }

  GetSolution(solutionId: string, includeWorkspaces: boolean) {
    const url = environment.saasafras.api.url + 'app/' + solutionId + (includeWorkspaces ? '?includeWorkspaces=true' : '');
    return this.http.get<Solution>(url,
      {
        headers: this.defaultHeaders()
      });
  }

  GetClients() {
    return this.http.get<Clients>(environment.saasafras.api.url + 'clients',
      {
        headers: this.defaultHeaders()
      });
  }
  // end new style

  Patch(solutions, client, env, html, load) {
    console.log('patching');

    let solution;
    let currentVersion;
    let latestVersion;


    // getSolution

    console.log('Solutions Check Length: ' + solutions.length);

    // Get version of current deployment
    const getDeploymentVersionUrl = environment.saasafras.api.url + 'client/' + client + '/env/' + env + '/app/' + solution;
    this.http.get(getDeploymentVersionUrl, {
      headers: {
        ['Accept']: 'application/json',
        ['x-api-key']: environment.saasafras.api.key
      }
    });

    // Get Latest Version of solution
    const GetSolutionVersionURL = environment.saasafras.api.url + 'app/' + solution + '/currentversion';
    this.http.get(GetSolutionVersionURL, {
      headers: {
        ['Accept']: 'application/json',
        ['x-api-key']: environment.saasafras.api.key
      }
    });

    console.log('Latest Version: ' + latestVersion);
    console.log('Current Version: ' + currentVersion);

    // Get Difference
    const getDiffUrl = environment.saasafras.api.url + 'app/' + solution + '/diff/' + currentVersion + '/' + latestVersion;
    this.http.get(getDiffUrl, {
      headers: {
        ['Accept']: 'application/json',
        ['x-api-key']: environment.saasafras.api.key
      }
    });
  }

  CreateVersion() {
    let solution;
    const solutionSelected = document.getElementById('selectedsolution').innerText;

    solution = solutionSelected.replace(/\s+/g, '').toLowerCase();
    console.log('Solution: ' + solution);
    let body;
    const command = 'refresh';
    let version;
    // Get Version:
    this.http.get(environment.saasafras.api.url + 'app/' + solution.id + '/currentversion', {
      headers: {
        ['Accept']: 'application/json',
        ['x-api-key']: environment.saasafras.api.key
      }
    });

    console.log('Version: ' + version);
    body = { command, version };

    // POST to API:
    this.http.post(environment.saasafras.api.url + 'app/' + solution.id, body, {
      headers: {
        ['Content-Type']: 'application/json',
        ['Accept']: 'application/json',
        ['x-api-key']: environment.saasafras.api.key
      }
    });
  }
}
