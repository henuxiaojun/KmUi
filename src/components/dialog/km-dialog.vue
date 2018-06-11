<template>
  <div class="km-dialog" v-show="isShow">
    <div class="km-mask" @click="close"></div>
    <div class="km-dialog-content">
      <div class="km-dialog-header">{{headerText}}</div>
      <div class="km-dialog-body">
        <slot name="content">
          {{contentText}}
        </slot>
      </div>
      <div class="km-dialog-footer" :class="{'more-btn': btnList.length > 2}">
        <button v-for="(btn, index) in btnList"
                @click="btnClick(btn, index)"
                :key="index"
                :class="{'close-color': btnList.length === 2 && index === 0}"
        >{{btn.name}}</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'km-dialog',
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      headerText: {
        type: String,
        default: '顶部信息'
      },
      closeBtn: {
        type: Boolean,
        default: true
      },
      confirmBtn: {
        type: Boolean,
        default: true
      },
      contentText: {
        type: String,
        default: '传入contentText显示在这里'
      },
      dialogType: {
        type: String,
        default: 'confirm'
      },
      footerBtnList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      btnList() {
        switch(this.dialogType) {
          case 'confirm':
            return this.footerBtnList.length > 0 ? this.footerBtnList : [
              {name: '关闭', fnName: 'close'},
              {name: '确认', fnName: 'confirm'}
            ]
          case 'prompt' :
            return this.footerBtnList.length > 0 ? this.footerBtnList : [
              {name: '确认', fnName: 'prompt'}
            ]
          default :
            return this.footerBtnList.length > 0 ? this.footerBtnList : [
              {name: '选项1', fnName: 'choice'},
              {name: '选项2', fnName: 'choice'},
              {name: '选项3', fnName: 'choice'}
            ]
        }
      }
    },
    methods: {
      btnClick(btn, index) {
        this.$emit(`${btn.fnName}`,{btn,index})
        this.close()
      },
      close() {
        this.$updateProps ? this.$updateProps({isShow: false}) : this.$emit('update:isShow', false)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";
  .km-dialog {
    @include window-full;
    @include flexCenter;
    .km-mask {
      @include window-full;
      z-index: 1900;
      background: rgba(0, 0, 0, .4);
    }
    .km-dialog-content {
      position: relative;
      z-index: 2000;
      display: flex;
      flex-direction: column;
      border-radius: rem-calc(14px);
      width: rem-calc(460px);
      background-color: #fff;
      .km-dialog-header {
        padding: rem-calc(40px) rem-calc(40px) 0;
        text-align: center;
        font-size: rem-calc(36px);
        color: #000;
      }
      .km-dialog-body{
        padding: rem-calc(30px) rem-calc(40px);
        text-align: center;
        font-size: rem-calc(30px);
      }
      .km-dialog-footer{
        @include flexCenter;
        height: rem-calc(100px);
        color: $color-text-link;;
        button {
          @extend %bd-t;
          @extend %bd-r;
          flex: 1;
          height: rem-calc(100px);
          line-height: rem-calc(100px);
          text-align: center;
          font-size: rem-calc(36px);
          color: inherit;
          background: none;
          &:last-child{
            &:before {
              border-right: none;
            }
          }
        }
        .close-color {
          color: #000;
        }
      }
      .more-btn {
        flex-direction: column;
        height: auto;
        button {
          @extend %bd-t;
          width: 100%;
          &::before {
            border-right: none;
          }
        }
      }
    }
  }

</style>
