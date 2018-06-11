<template>
  <div class="km-header">
    <span class="km-header-left has-left" @click="backOnClick">{{backText}}</span>
    <span class="km-header-name" @click="titleOnClick">{{title}}</span>
    <span class="km-header-right" @click="rightOnClick" v-html="rightText"></span>
  </div>
</template>
<script>
  export default {
    name: 'km-header',
    props: {
      backText: {
        type: String,
        default: '返回'
      },
      title: {
        type: String,
        default: '标题'
      },
      rightText: {
        type: String,
        default: ''
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
    methods: {
      backOnClick() {
        this.$emit('back-click')
      },
      titleOnClick() {
        this.$emit('title-click')
      },
      rightOnClick() {
        this.$emit('right-click')
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem-calc(750px);
    height: rem-calc(88px);
    color: #000000;
    background: #fff;
    box-shadow: 0 rem-calc(-1px) 0 0 rgba(221, 221, 221, 1);
    .km-header-left {
      @include child-center;
      left: rem-calc(31px);
      transform: translate3d(0, -50%, 0);
      display: flex;
    }
    .has-left {
      &:before {
        content: '';
        width: rem-calc(44px);
        height: rem-calc(44px);
        @include bg-img(url('../../assets/icon-back.svg'))
      }
    }
    .km-header-name {
      font-size:rem-calc(36px);
      font-weight: bold;
    }
    .km-header-right {
      @include child-center;
      left: auto;
      right: rem-calc(31px);
      transform: translate3d(0, -50%, 0);
    }
  }
</style>
