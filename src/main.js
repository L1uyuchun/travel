// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'  //初始化样式，配置html的fs为50px
import 'styles/border.css' //解决移动端一像素的问题
import FastClick from 'fastclick'  //解决点击事件300ms延迟的问题
import 'styles/iconfont/iconfont.css'



FastClick.attach(document.body);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
