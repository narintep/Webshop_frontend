import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Body from './components/Body.vue'
import Nav1 from './components/Nav-1.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import WaitingList from './components/WaitingList.vue'
import Signup from './components/Signup.vue'
import Edit from './components/Edit.vue'


import Vuetify from 'vuetify'
import store from './store'
 
// import 'vuetify/src/stylus/main.styl'
 
Vue.use(Vuetify)
 
Vue.config.productionTip = false
 
Vue.use(BootstrapVue);
Vue.component('Body', Body)
Vue.component('Nav1', Nav1)
Vue.component('List', List)
Vue.component('Detail', Detail)
Vue.component('WaitingList', WaitingList)
Vue.component('Edit', Edit)
Vue.component('Signup', Signup)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')