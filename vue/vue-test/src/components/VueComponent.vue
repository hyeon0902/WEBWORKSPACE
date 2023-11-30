<template>
    <div>
      <label><input type="text" v-model="msg" autofocus /></label>
      <p>{{ msg }}</p>
    </div>
  </template>
  <script>
  export default {
    name: 'VueComponent',
    data() {
      return {
        msg: '2023-11-30',
      };
    },
  };
  </script>
  <style scoped>
  p {
    background-color: rgb(92, 113, 206);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>