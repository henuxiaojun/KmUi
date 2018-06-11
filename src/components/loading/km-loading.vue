<template>
  <div class="km-loading" v-show="isShow" :style="{'background-color': bgColor}"></div>
</template>

<script>
  export default {
    name: 'km-loading',
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      bgColor: {
        type: String,
        default: '#f4f4f4'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/mixin/mixin";
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  .km-loading {
    position: absolute;
    z-index: 2000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      @include bg-img(url('../../assets/icon-loading.svg'));
      content: '';
      border-radius: 50%;
      width: rem-calc(48px);
      height: rem-calc(48px);
      animation: rotate360 1s linear infinite;
    }
  }

  @keyframes rotate360 {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
</style>
