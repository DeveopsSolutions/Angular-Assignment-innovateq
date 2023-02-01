import { environment as dev } from './environment.dev';
const host: string = window.location.host.toLowerCase();
let stage = 'default'

switch (host) {
    case 'dev.jsonplaceholder.typicode.com':
        stage = 'dev';
        break;
}

const environments = {
  default: {
      production: false,
      hmr: false,
      webApiBaseUri: 'https://jsonplaceholder.typicode.com',
  },
  dev: dev,
}

export const environment = environments.default;