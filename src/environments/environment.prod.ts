export const environment = {
  production: true,
  podio: {
    oauth: {
      baseUrl: 'https://www.podio.com/oauth/authorize',
      clientId: 'saasafras-4kir04',
      redirectUrl: 'https://saasafras-237116.appspot.com/auth'
    },
    oauth_service: {
      baseUrl: 'https://www.podio.com/oauth/authorize',
      clientId: 'saasafras-service',
      redirectUrl: 'https://saasafras-237116.appspot.com/service-auth'
    }
  },
  saasafras: {
    api: {
      key: 'n7yNNIEr3t4OJgahvwJ7x6p7UlMjcIDo5SOaR6Ex',
      url: 'https://8bdw7ju091.execute-api.us-east-2.amazonaws.com/dev/api/'
    }
  }
};
