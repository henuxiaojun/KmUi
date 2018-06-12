<template>
  <transition name="km-hide">
    <div v-show="isShow" class="km-toast">
      <div class="km-mask" v-if="hasMask"></div>
      <div class="km-toast-content">
        <span class="icon" v-if="toastType"
              :class="[
              {'icon-loading': toastType === 'loading'},
              {'animation': toastType === 'loading'},
              {'icon-success': toastType === 'success'},
              {'icon-error': toastType === 'error'},
              {'icon-message': toastType === 'message'}
              ]"
        ></span>
        <span class="text">{{text}}</span>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'km-toast',
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      hasMask:  {
        type: Boolean,
        default: true
      },
      text:  {
        type: String,
        default: '请传入文字'
      },
      toastType: {
        type: String,
        default: ''
      },
      delayTime: {
        type: Number,
        default: 2000
      }
    },
    watch: {
      isShow(to) {
        if (to && this.delayTime !== 0) {
          this.hide()
        }
      }
    },
    methods: {
      hide() {
        setTimeout(() => {
          this.isShow = false
        }, this.delayTime)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-toast {
    @include window-full;
    .km-mask {
      @include window-full;
      z-index: 1900;
      background: rgba(0, 0, 0, .4);
    }
    .km-toast-content {
      @include child-center;
      @include flexCenter(column);
      position: relative;
      z-index: 2000;
      padding: rem-calc(24px) rem-calc(30px);
      border-radius: rem-calc(10px);
      max-width: rem-calc(342);
      background: $color-bg-toast;
      color: #fff;
      .text {
        text-align: center;
      }
      .icon {
        margin-bottom: rem-calc(12px);
        width: rem-calc(72px);
        height: rem-calc(72px);
      }
      .animation {
        animation: rotate360 1s linear infinite;
      }
      .icon-loading {
        @include bg-img(url('../../assets/icon-loading.svg'))
      }
      .icon-success {
        @include bg-img(url('../../assets/icon-success.svg'))
      }
      .icon-error {
        @include bg-img(url('../../assets/icon-fail.svg'))
      }
      .icon-message {
        @include bg-img(url('../../assets/icon-warn.svg'))
      }
    }
  }

  @keyframes rotate360 {
    from {
      transform: rotateZ(0deg)
    }
    to {
      transform: rotateZ(360deg)
    }
  }

  .km-hide-enter-active,
  .km-hide-leave-active {
    transition: opacity .3s ease-in-out;
  }

  .km-hide-enter,
  .km-hide-leave-to {
    opacity: 0;
  }
</style>
