<template>
  <div>
    <input type="text" v-model="selected">
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue'

export default {
  name : 'app',
  data(){
    return {
      selected : 'PropsCom'
    }
  },
  components : {
    PropsCom,
    SlotCom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
