import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/index'

//解决移动端点击事件300ms延迟问题
import fastclick from "fastclick"

//图片懒加载
import VueLazyload from 'vue-lazyload'

fastclick.attach(document.body)

Vue.use(VueLazyload)

Vue.config.productionTip = false

//配置事件总线
Vue.prototype.$bus = new Vue()

//安装插件toast
Vue.use(toast)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')