<template>
  <div id="header">
    <span>Королевство {{ kingdomName }}</span>
    <span>Год {{ year }}-й</span>
  </div>
</template>

<script>
  import kingdomNames from '../assets/kingdom-names.json';

  export default {
    name: "Header",
    props: {
      year: Number,
    },
    data() {
      return {
        kingdomNames: kingdomNames,
        kingdomCode: 1
      }
    },
    computed: {
      kingdomName: function () {
        return kingdomNames[this.kingdomCode];
      }
    }
  }
</script>

<style scoped>
  #header {
    position: relative;
    padding: 10px;
    background: white;
    box-shadow: 0 0 4px silver;
  }
  #header span + span {
    margin-left: 10px;
  }
</style>
