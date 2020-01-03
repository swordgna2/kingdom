<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <p>Have a crown: <font-awesome-icon icon="crown"/></p>-->
    <Header
      v-bind:year="year"
    />
  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    name: 'app',
    components: { Header },
    data() {
      return {
        year: 1
      };
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555555;
  }
</style>
