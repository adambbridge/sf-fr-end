export class EnvironmentCredentialsRequest {
    constructor(public code: string, public clientId: string, public environmentId: string, public redirectUri: string) {}
}