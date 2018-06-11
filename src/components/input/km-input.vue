<template>
  <label for="" class="km-label">
    <input class="km-input"
           :type="type"
           :placeholder="placeholder"
           :value="value"
           v-if="passwordHide"
           @input="inputChange($event.target.value)"
    >
    <input type="text"
           class="km-input"
           v-else
           :value="value"
           :placeholder="placeholder"
           @input="inputChange($event.target.value)"
    >
    <span class="input-icon" @click.stop="iconClick" v-if="changeIcon">
      <img :src="changeIcon" alt="icon">
    </span>
    <span class="input-text" @click="textClick" v-if="rightText">{{rightText}}</span>
  </label>
</template>
<script>
  export default {
    name: 'km-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      hasClear: {
        type: Boolean,
        default: false
      },
      rightText: {
        type: String,
        default: ''
      },
      linkTo: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        passwordHide: true
      }
    },
    mounted() {
    },
    computed: {
      changeIcon() {
        if (this.hasClear) {
          return require('../../assets/icon-clear.svg')
        }
        if (this.type === 'password') {
          return this.passwordHide ? require('../../assets/icon-psw-hide.svg') : require('../../assets/icon-psw-show.svg')
        }
      }
    },
    components: {},
    methods: {
      iconClick() {
        if (this.type === 'password') {
          this.passwordHide = !this.passwordHide
        }
        if (this.hasClear) {
          this.$emit('input', '')
        }
      },
      inputChange(value) {
        this.$emit('input', value)
      },
      textClick() {
        if (this.$router) {
          this.$router.push({
            path: this.linkTo
          })
        } else {
          window.location.href = this.linkTo
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";
  .km-label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .km-input {
      flex: 1;
      margin-left: rem-calc(10px);
      height: rem-calc(90px);
      background-color: #fff;
    }
    .input-icon {
      position: absolute;
      top: 50%;
      right: rem-calc(10px);
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem-calc(36px);
      height: rem-calc(36px);
      transform: translateY(-50%);
      img {
        width: rem-calc(36px);
        height: rem-calc(36px);
      }
    }
  }
</style>
