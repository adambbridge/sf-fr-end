export class JwtResponse {
    token: string;
    state: string;
}

export class Jwt {
    accountId: string;
    scope: string;
    expiration: Number;
    issueDate: Number;
    notBefore: Number;
    issuer: string;
}
