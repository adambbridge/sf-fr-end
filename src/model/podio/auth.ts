export class OAuthResponse {
  code: string;
  state: string;
  token: string;

  constructor(private oauthResponseFragment: string) {
    // console.log('parsing ' + JSON.stringify(oauthResponseFragment));
    const kvs = oauthResponseFragment.split('&');
    kvs.forEach(pair => {
      const kv = pair.split('=');
      switch (kv[0]) {
        case 'code':
          this.code = kv[1];
          break;
        case 'access_token':
          this.token = kv[1];
          break;
        case 'state':
          this.state = kv[1];
          break;
      }
    });
    // console.log(this.code ? 'using code: ' + this.code : 'using token: ' + this.token);
    // console.log('using state: ' + this.state);
  }
}
