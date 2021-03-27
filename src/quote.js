// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Quote from './Quote.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#request-a-quote',
    components: { Quote },
    template: '<Quote/>'
})
