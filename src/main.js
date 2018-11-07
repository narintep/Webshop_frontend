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
import Database from './components/Database.vue'

import Purchased from './components/table/purchased.vue'
import candlet from './components/table/candlet.vue'
import customer from './components/table/customer.vue'

import colors from './components/table/colors.vue'
import customert from './components/table/customert.vue'
import expense from './components/table/expense.vue'
import history from './components/table/history.vue'
import invoice from './components/table/invoice.vue'
import report from './components/table/report.vue'
import size from './components/table/size.vue'
import smell from './components/table/smell.vue'
import view from './components/table/view.vue'
import waitingl from './components/table/waitingl.vue'



import Vuetify from 'vuetify'
import store from './store'
import VueSession from 'vue-session'
Vue.use(VueSession)
// import 'vuetify/src/stylus/main.styl'
 
Vue.use(Vuetify)
 
Vue.config.productionTip = false
 
Vue.use(BootstrapVue);
Vue.component('Body', Body)
Vue.component('Purchased', Purchased)
Vue.component('Nav1', Nav1)
Vue.component('List', List)
Vue.component('Detail', Detail)
Vue.component('WaitingList', WaitingList)
Vue.component('Edit', Edit)
Vue.component('Signup', Signup)
Vue.component('Database', Database)
Vue.component('Candlet', candlet)
Vue.component('Customer', customer)

Vue.component('Colors', colors)
Vue.component('Customert', customert)
Vue.component('Expense', expense)
Vue.component('History', history)
Vue.component('Invoice', invoice)
Vue.component('Report', report)
Vue.component('Size', size)
Vue.component('Smell', smell)
Vue.component('Viewz', view)
Vue.component('Waitingl', waitingl)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')