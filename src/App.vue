<template>
  <div id="app"></div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isShow: true,
        listData: [],
        inputData: 'aaaa'
      }
    },
    components: {},
    mounted() {
      this.dialogInstance = this.$dialog({
      }, (h) => {
        return h('div', {
          slot: 'content'
        })
      })
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
