// import {UserRoleType} from "@app/panel/domain/user-role-type";
import {UserRoleType} from "../app/app/panel/domain/user-role-type";

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
        token: '/api/oauth/token'
      },
      users: {
        requestReset: '/api/users/request',
        confirmation_token: '/api/users/confirmation_token',
        reset_token: '/api/users/reset_token',
        reset_confirmation: '/api/users/reset_confirmation',
        reset_password: '/api/users/reset_password',
        reset_user_password: '/api/users/reset_user_password',
        reset: '/api/users/reset',
        base: '/api/users/pages',
        find: '/api/users/find',
        create: '/api/users/create',
        get: (id: number) => `/api/users/${id}`,
        persist: (id: number) => `/api/users/${id}`,
        export: '/api/users/export'
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
