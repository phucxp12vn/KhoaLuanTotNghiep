import {
  SET_USER,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_MESSAGE,
  USER_ROLE,
} from './types';
import LoginService from 'modules/login/store/service';
import ServiceToken from 'core/service';
import router from 'router';
import {
  ACCESS_TOKEN_KEY,
  USER,
  ROLE
} from 'core/constants';
import _ from 'lodash';

const service = new LoginService();

export const login = async ({ commit }, payload) => {
  let resp = await service.login(payload);
  if (resp != null && resp.success) {
    localStorage.setItem(ACCESS_TOKEN_KEY, resp.data.token);
    localStorage.setItem(ROLE, JSON.stringify(resp.data.role));
    localStorage.setItem(USER, JSON.stringify(resp.data.user_info));
    ServiceToken.setToken(resp.data.access_token);

    commit(SET_USER, resp.data.user_info);
    authSuccess({ commit }, resp.data.token);
    commit(USER_ROLE,resp.data.role);

    router.push('/');
  } else {
    localStorage.clear();
    ServiceToken.removeToken();
    commit(AUTH_ERROR, false);
    commit(
      SET_MESSAGE,
      resp == null
        ? 'Can not connect to server. Please check your network!'
        : resp.message
    );
  }
};

export const authSuccess = ({ commit }, token) => {
  commit(AUTH_SUCCESS, { token });
};


export const logout = ({ commit }) => {
  return new Promise(resolve => {
    commit(AUTH_LOGOUT);
    localStorage.clear();
    ServiceToken.removeToken();
    router.push('/login');
    resolve();
  });
};



