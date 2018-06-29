<template>
  <div id="app">
    <choice-list></choice-list>
  </div>
</template>

<script>
  import choiceList from '@/components/choicelist/km-choice-list'
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    components: {choiceList},
    mounted() {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  #app {
    position: fixed;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
