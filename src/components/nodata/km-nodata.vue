<template>
  <div class="km-nodata" v-show="isShow">
    <span class="nodata-bg"></span>
    <span class="nodata-title">{{title}}</span>
    <span class="nodata-description">{{description}}</span>
    <span class="nodata-link" v-if="link" @click="linkTo">{{link.text}}</span>
  </div>
</template>
<script>
  export default {
    name: 'km-nodata',
    props: {
      link: {
        type: Object,       // text: 文字 linkTo: 链接
        default: null
      },
      description: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: '暂无数据！'
      },
      isShow: {
        type: Boolean,
        default: false
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
      linkTo() {
        if (this.link.vueRouter) {
          this.$router && this.$router.push({
            path: this.link.linkTo
          })
        } else {
          window.location.href = this.link.linkTo
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";
  .km-nodata {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .nodata-bg {
      width: rem-calc(400px);
      height: rem-calc(400px);
      @include bg-img(url(../../assets/icon-no-data.svg))
    }
    .nodata-title {
      margin: rem-calc(10px);
      line-height: rem-calc(51px);
      font-size: rem-calc(34px);
      color: #000;
    }
    .nodata-description {
      line-height: rem-calc(42px);
      font-size: rem-calc(28px);
      color: #888;
    }
    .nodata-link {
      margin-top: rem-calc(40px);
      color: $color-text-link;
    }
  }
</style>
