import { UserRoleType } from '../app/shared/models/panel/user-role-type';

const baseUrl = 'http://localhost:8080';
export const environment = {
  production: false,
  config: {
    pageSize: 10
  },
  api: {
    keys: {
      auth: {
        clientId: 'web',
        secret: 'secret'
      }
    },
    urls: {
      auth: {
        token: baseUrl + '/engine/oauth/token'
      },
      users: {
        requestReset: baseUrl + '/engine/users/request',
        confirmation_token: baseUrl + '/engine/users/confirmation_token',
        reset_token: baseUrl + '/engine/users/reset_token',
        reset_confirmation: baseUrl + '/engine/users/reset_confirmation',
        reset_password: baseUrl + '/engine/users/reset_password',
        reset_user_password: baseUrl + '/engine/users/reset_user_password',
        reset: baseUrl + '/engine/users/reset',
        base: baseUrl + '/engine/users/pages',
        find: baseUrl + '/engine/users/find',
        create: baseUrl + '/engine/users/create',
        get: (id: number) => `/api/users/${id}`,
        persist: (id: number) => `/api/users/${id}`,
        export: baseUrl + '/engine/users/export'
      },
      dashboard: {
        dataPage: baseUrl + '/engine/data/page'
      }
    },
    unauthorizedUrls: [
      new RegExp('^/api/oauth/token$'),
      new RegExp('^/api/users/request$'),
      new RegExp('^/api/users/confirmation_token$'),
      new RegExp('^/api/users/reset_token'),
      new RegExp('^/api/users/reset_confirmation'),
      new RegExp('^/api/users/reset_password'),
      new RegExp('^/api/users/reset$')
    ]
  },
  defaultRoutes: [
    { role: UserRoleType.masterAdmin, route: '/panel/dashboard' },
    { role: UserRoleType.techAdmin, route: '/panel/dashboard' }
  ]
};
