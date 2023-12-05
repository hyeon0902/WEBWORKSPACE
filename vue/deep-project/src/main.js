import { createApp } from 'vue'
import App from './App.vue'
import mixin from './mixin.js'

createApp(App)
.mixin(mixin)
.directive('focus',{
    mounted(el, binding, vnode, prevVnode){{
        console.log('mounted',el, binding, vnode, prevVnode);
        if(binding.value){
            el.focus();
        }
    }},
    updated(el, binding, vnode, prevVnode){
        console.log('mounted',el, binding, vnode, prevVnode);
        if(binding.value){
            el.style.color='red';
        }else{
            el.style.color='black';
        }
    }
})
.mount('#app')
