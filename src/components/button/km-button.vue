<template>
  <button class="km-button" :class="[
    {'button-tap': btnType === 'tap'},
    {'button-secondary-normal': btnType === 'secondary'},
    {'button-secondary-tap': btnType === 'secondary-tap'},
    {'button-normal': btnType === 'normal'},
    {'button-disabled': btnDisabled},
    {'button-loading': btnLoading}
  ]" @click="buttonClick" :disabled="btnDisabled || btnLoading">
    <slot>
      {{btnText}}
    </slot>
  </button>
</template>
<script>
  export default {
    name: 'km-button',
    props: {
      btnText: {
        type: String,
        default: '主按钮'
      },
      btnType: {
        type: String,
        default: 'normal'
      },
      btnDisabled: {
        type: Boolean,
        default: false
      },
      btnLoading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      buttonClick() {
        this.$emit('btn-click')
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 rem-calc(40px);
    border-radius: rem-calc(10px);
    height: rem-calc(94px);
    font-size: rem-calc(36px);
    color: #fff;
  }

  .button-normal {
    @include gra-linear(to left, #FFBB00, #FF9900);
  }

  .button-tap {
    @include gra-linear(90deg, #FFBB00, #FF9900);
    background-color: rgba(34, 34, 34, 0.1);
    color: rgba(254, 254, 254, 0.6)
  }

  .button-disabled {
    color: #fff;
    @include gra-linear(to left, #FFBB00, #ff9900);
    opacity: 0.4;
  }

  .button-loading {
    &::before {
      @include bg-img(url('../../assets/icon-loading.svg'));
      content: '';
      margin-right: rem-calc(18px);
      width: rem-calc(44px);
      height: rem-calc(44px);
      animation: rotate360 2s linear infinite;
    }
  }

  .button-secondary-normal {
    @include gra-linear(to left, #FFFAEB, #FFF1D6);
    color: #ffaa00;
  }

  .button-secondary-tap {
    @include gra-linear(to left, #FFFAEB, #FFF1D6);
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(255, 170, 0, 0.6);
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
