<template>
  <div class="km-progress">
    <span class="km-progress-active" :style="{transform: scaleValue}"></span>
  </div>
</template>
<script>
  export default {
    name: 'km-progress',
    props: {
      per: {
        type: [Number,String],
        default: 0
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    computed: {
      scaleValue() {
        return parseFloat(this.per) > 1 ? `scaleX(${parseFloat(this.per)/100})` : `scaleX(${parseFloat(this.per)})`
      }
    },
    components: {},
    methods: {}
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";
  .km-progress {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: rem-calc(4px);
    background-color: #ddd;
    .km-progress-active {
      width: 100%;
      height: rem-calc(4px);
      background-color: $color-fill-main;
      transform-origin: left;
      transition: transform .2s linear;
    }
  }
</style>
