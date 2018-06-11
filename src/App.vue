<template>
  <div id="app">
    <div>
      <km-dialog
        :isShow="true"
        :headerText="'删除确认'"
        :contentText="'删除后数据无法恢复'"
        :dialogType="'confirm'"
      ></km-dialog>
      <km-button>aisuifhauihvui</km-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isShow: true
      }
    },
    components: {},
    mounted() {
      console.log(this);
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
