<template>
  <span class="km-badge" v-show="isShow && count !== 0" :class="{'km-badge-text': count}">
    <slot>{{count}}</slot>
  </span>
</template>
<script>
  export default {
    name: 'km-badge',
    props: {
      count: {
        type: [Number,String],
        default: ''
      },
      isShow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";
  .km-badge {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: rem-calc(10px);
    border-radius: rem-calc(32px);
    min-width: rem-calc(22px);
    height: rem-calc(22px);
    background-color: $color-fill-tag;
    font-size: rem-calc(20px);
    color: #fff;
  }
  .km-badge-text{
    min-width: rem-calc(32px);
    height: rem-calc(32px);
  }
</style>
