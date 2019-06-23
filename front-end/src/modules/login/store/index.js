/*
 * @Author: Khang.Dong
 * @Email: khang.dong@dounets.com
 * @Date: 2018-10-02 09:58:06
 * @Last Modified by:   Khang.Dong
 * @Last Modified time: 2018-10-02 09:58:06
 */
import {
  SET_USER,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  SET_MESSAGE,
  USER_ROLE,
} from './types';

// import menus from './menus';

import * as getters from './getters';
import * as actions from './actions';
import Menu from './menus';
import { ACCESS_TOKEN_KEY, USER, ROLE } from 'core/constants';

const state = {
  user: JSON.parse(localStorage.getItem(USER)),
  token: localStorage.getItem(ACCESS_TOKEN_KEY) || '',
  hasLoadedOnce: true,
  message: '',
  menus: Menu,
  role: JSON.parse(localStorage.getItem(ROLE))

};

const mutations = {

  [USER_ROLE](state,resp){
    state.role = resp.role;
  },

  [SET_USER](state, user) {
    state.user = user || {};
  },

  [AUTH_SUCCESS](state, resp) {
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },

  [AUTH_ERROR](state, resp) {
    state.hasLoadedOnce = resp;
  },

  [AUTH_LOGOUT](state) {
    state.token = '';
  },


  [SET_MESSAGE](state, message) {
    state.message = message;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
