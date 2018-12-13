import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Modal } from 'bootstrap-vue/es/components';

Vue.use(BootstrapVue);
Vue.use(Modal);

Vue.config.productionTip = false

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyA2YXWByVhtffNLUq_N6BlWIGE_LujEp9Q",
  authDomain: "footballapp-567b5.firebaseapp.com",
  databaseURL: "https://footballapp-567b5.firebaseio.com",
  projectId: "footballapp-567b5",
  storageBucket: "",
  messagingSenderId: "298355937448"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
