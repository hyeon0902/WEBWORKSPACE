<template>
  <div>
    <input type="text" v-model="selected" v-focus="isFoucsed">
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue';
import Composition from './components/CompositionInterface.vue';
import StoreCom from './components/StoreComponent.vue';

export default {
  name : 'app',
  data(){
    return {
      selected : 'PropsCom',
      isFoucsed : false
    }
  },
  components : {
    PropsCom,
    SlotCom,
    Composition,
    StoreCom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
