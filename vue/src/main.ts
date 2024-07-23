import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import { create } from 'core-js/core/object';
import {createApp} from 'vue'
Vue.config.productionTip = false
Vue.use(ElementUI)

const app=createApp(App)



