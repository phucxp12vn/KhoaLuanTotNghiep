import _ from 'lodash';
import SUPPLIER_SYSTEM from './supplier-system';

const DEFAULT_ROUTES = [
  {
    path: '*',
    meta: {
      title: 'Not Found'
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/403',
    meta: {
      title: 'Access Denied'
    },
    name: 'AccessDenied',
    component: () => import('modules/pages/Deny.vue')
  },
  {
    path: '/404',
    meta: {
      title: 'Not Found'
    },
    name: 'NotFound',
    component: () => import('modules/pages/NotFound.vue')
  },
  {
    path: '/500',
    meta: {
      title: 'Internal Error Server'
    },
    name: 'ServerError',
    component: () => import('modules/pages/Error.vue')
  },
  {
    path: '/',
    redirect: {
      path: '/dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: {
      requiresAuth: true
    },
    name: 'Dashboard',
    component: () => import('modules/dashboard')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('modules/login'),
    meta: {
      title: 'TP Shop Login'
    }
  }
];

const routes = _.concat(DEFAULT_ROUTES,SUPPLIER_SYSTEM);
export default routes;