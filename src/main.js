import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'styles/resets.css';
import 'styles/border.css';
import 'styles/common.scss';
import 'styles/iconfont.css';
import 'js/fastclick.js';
import 'js/common.js';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
