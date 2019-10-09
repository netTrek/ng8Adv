import { baseEnviroment } from './base-enviroments';

export const environment = {
  ... baseEnviroment,
  production: true,
  endpoint: '/api/user'
};
