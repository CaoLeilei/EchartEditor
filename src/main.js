import Vue from 'vue';
import ElementUi from 'element-ui';
import App from './App.vue';
import './assets/styles/element/index.css';
import './styles/index.scss';

Vue.config.productionTip = false;

Vue.use(ElementUi, {size: 'mini'});

new Vue({
  render: h => h(App),
}).$mount('#app');
