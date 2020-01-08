<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <p>Have a crown: <font-awesome-icon icon="crown"/></p>-->
    <HeaderPanel
      v-bind:year="year"
      v-bind:kingdom="myKingdom"
    />
    <div id="content">
      <DialogPanel
          v-bind:dialog-data="dialogData"
      />
      <StatisticsPanel/>
    </div>
    <FooterPanel/>
  </div>
</template>

<script>
  import HeaderPanel from "./components/HeaderPanel";
  import StatisticsPanel from "./components/StatisticsPanel";
  import DialogPanel from "./components/DialogPanel";
  import FooterPanel from "./components/FooterPanel";

  class KingdomClass {
    constructor() {
      this.live = false;
      // this.code = null;
    }
    neighbors = [];
  }

  export default {
    name: 'app',
    components: {FooterPanel, DialogPanel, StatisticsPanel, HeaderPanel },
    data() {
      return {
        dialogData: {
          header: 'Название королевства',
          message: 'Выберите название Вашего королевства'
        },
        year: 1,
        myKingdom: new KingdomClass
      };
    },
    created() {
      // new Vue({
      //
      // })
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #content {
    flex: 1;
    display: flex;
  }
</style>
