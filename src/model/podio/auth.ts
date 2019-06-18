export class OAuthResponse {
  constructor(
    public code: string = null,
    public state: string = null,
    public AccessToken: string = '',
    public RefreshToken: string = '',
    public Expiration: Number = -1) {}
    // console.log(this.code ? 'using code: ' + this.code : 'using token: ' + this.token);
    // console.log('using state: ' + this.state);
}

