import Vue from 'vue'
import App from './App'
import router from 'router'
import store from 'store'
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import axios from 'axios';
import 'core/theme/default.styl';
import Filters from 'core/filters';

import VeeValidate from 'vee-validate';
import updateData from 'core/mixins/updateData';
import message from './message';
import {ACCESS_TOKEN_KEY, AUTH_HEADER_KEY} from 'core/constants';
import VueGAPI from 'vue-gapi';
import Service from 'core/service'



Vue.config.productionTip = false;

Vue.use(Filters);
Vue.mixin(updateData);
Vue.use(VeeValidate,{ fieldsBagName: 'formFiels'});
Vue.use(VueGAPI, {});
Vue.use(Vuetify,{
  iconfont: 'md',
  theme: {
    primary: colors.indigo.base,
    secondary: colors.indigo.lighten4,
    accent: colors.indigo.base,
    error: colors.red.accent3
  },
  options: {
    themeVariations: ['#00695c', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: '#00695c'
      },
      sideToolbar: {},
      sideNav: 'red',
      mainNav: 'red',
      bodyBg: '',
      dark: true
    }
  }
});

axios.defaults.headers.post['Content-Type'] = 'application/json';
const token = localStorage.getItem(ACCESS_TOKEN_KEY);
if (token) {
  axios.defaults.headers.common[AUTH_HEADER_KEY] = `${token}`;
}

Service.interceptors({
  request: request => {
    return request;
  }
});

Vue.prototype.$message = message;

new Vue({
  // eslint-disable-line no-new
  el: '#app',

  components: {
    App
  },

  router,
  store,
  // i18n,
  render: h => h('app')
});