import { Injectable, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Operator, of, merge, pipe } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { environment } from "src/environments/environment";
import { Jwt, JwtResponse } from "src/model/saasafras/jwt";
import { SaasafrasService } from "./saasafras.service";
import { map, delay } from "rxjs/operators";
import { TokenService } from "./get-token.service";
import { decode } from "punycode";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root"
})
export class AuthService {
    // @Output()
    tokenEvent = new EventEmitter<Jwt>();
    public token$ = new Observable<Jwt>();
    public IsAuth$: Observable<boolean>;
    public IsAuth = false;

    // log out by sending a delayed null Jwt
    private nullJwt = of(new Jwt());
    private timeOutJwt = this.nullJwt.pipe(delay(120000));

    // decoder = map((j: JwtResponse) => {
    //   console.log('decoder');
    //   return this.decode(j.token);
    // });

    constructor(private _router: Router, private http: HttpClient) {
        // merge them into one
        this.token$ = merge(
            // this.timeOutJwt,
            this.tokenEvent.asObservable()
        );
        this.IsAuth$ = this.token$.pipe(map(this.isTokenValid));
        const token = sessionStorage.getItem("jwt");
        if (token) {
            this.tokenEvent.emit(this.setAndDecode(token));
        }

        this.IsAuth$.subscribe({
            next: (b: boolean) => {
                this.IsAuth = b;
            }
        });
        // console.log('starting authService constructor...');
        // console.log('ending authService constructor.');
    }
    tokenHook(): Observable<Jwt> {
        const token = sessionStorage.getItem("jwt");
        const jwt = token ? this.setAndDecode(token) : new Jwt();

        return merge(of<Jwt>(jwt), this.token$);
    }

    /**
     * this is used to clear anything that needs to be removed
     */
    private clear(): void {
        sessionStorage.clear();
    }

    isInRole(role: string): Observable<boolean> {
        return this.token$.pipe(
            map((t: Jwt) => t.scope.split(",")),
            map((r: string[]) => r.includes(role))
        );
    }

    isTokenValid(token: Jwt): boolean {
        // console.log('isTokenValid');
        const now = Date.now() / 1000;
        // console.log('now: ' + now);
        if (token.expiration < now) {
            console.log("token is expired: " + token.expiration);
            return false;
        }
        if (token.notBefore > now + 60) {
            console.log("token is not valid yet: " + token.notBefore);
            return false;
        }
        if (token.issueDate > now + 60) {
            console.log("token issue date in the future: " + token.issueDate);
            return false;
        }
        if (token.issuer !== "api.saassafras.com") {
            console.log("token issuer isn't recognized: " + token.issuer);
            return false;
        }
        return true;
    }

    // this triggers a Podio OAuth sequence for the main user credentials
    // OAuth sequences for adding more Podio Users should not use this, as
    // they will need to redirect elsewhere
    login(): void {
        window.location.href =
            environment.podio.oauth.baseUrl + // create URL from parameters rather than hardcode
            "?response_type=token&client_id=" +
            environment.podio.oauth.clientId +
            "&redirect_uri=" +
            environment.podio.oauth.redirectUrl +
            "&state=12345";
    }

    loginSolutionServiceAccount(solutionId: string, version: string): void {
        window.location.href =
            environment.podio.oauth_service.baseUrl + // create URL from parameters rather than hardcode
            "?response_type=code&client_id=" +
            environment.podio.oauth_service.clientId +
            "&redirect_uri=" +
            environment.podio.oauth_service.redirectUrl +
            "&state=" +
            JSON.stringify({ solutionId, version });
    }

    loginEnvironmentServiceAccount(
        clientId: string,
        environmentId: string
    ): void {
        window.location.href =
            environment.podio.oauth_service.baseUrl + // create URL from parameters rather than hardcode
            "?response_type=code&client_id=" +
            environment.podio.oauth_service.clientId +
            "&redirect_uri=" +
            environment.podio.oauth_service.redirectUrl +
            "&state=" +
            JSON.stringify({ clientId, environmentId });
    }

    /**
     * this is used to clear local storage and also the route to login
     */
    logout(): void {
        console.log("logging out...");
        this.clear();
        this.tokenEvent.emit(new Jwt());
        this._router.navigate(["/login"]);
    }

    setAndDecode(tokenString: string): Jwt {
        const jwtDecode = require("jwt-decode");
        const t = jwtDecode(tokenString);
        // console.log(JSON.stringify(t));
        const j = new Jwt();
        // Issuer
        if (!t.iss) {
            throw new Error("Token has no issuer.");
        }
        j.issuer = t.iss;
        // Audience
        if (!t.aud) {
            throw new Error("Token has no audience.");
        }
        j.scope = t.aud;
        // Issue Date
        if (!t.iat) {
            throw new Error("Token has no issue date.");
        }
        j.issueDate = t.iat;
        // Expiration
        if (!t.exp) {
            throw new Error("Token has no expiration.");
        }
        j.expiration = t.exp;
        // Not Before
        if (!t.nbf) {
            throw new Error("Token has no start time.");
        }
        j.notBefore = t.nbf;
        // Subject
        if (!t.sub) {
            throw new Error("Token has no subject.");
        }
        j.accountId = t.sub;

        sessionStorage.setItem("jwt", tokenString);

        return j;
    }
}
