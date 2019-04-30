import Vue from 'vue';
import App from './App.vue';
// Для нормализации стилей используется normalize
// Глобальные стили подключаем отдельным файлом
import 'normalize.css';
import '@/global.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
