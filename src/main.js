import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style.css'
import store from './store/store.js';


Vue.config.productionTip = false
Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app