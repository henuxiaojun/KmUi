<template>
  <km-scroll class="row-scroll-wrapper" ref="wrapper"
             :class="{'row-wrapper' : optionScroll}"
             :data="navList"
             :scrollX="true"
             :scrollY="false"
             :click="true"
             @getScrollInstance="initList"
  >
    <ul ref="scroll" class="scroll">
      <li v-for="(item, index) in navList" :key="index" :class="{'scroll-item-active': activeIndex === index}"
          @click="navItemClick(item, index)">
        {{item.name || item}}
      </li>
    </ul>
  </km-scroll>
</template>
<script>
  import KmScroll from '../scroll/km-scroll'

  export default {
    name: 'km-nav',
    props: {
      navList: {        //数组内如果是对象，则必须包含name属性
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        optionScroll: true,
        activeIndex: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.computedWidth()
      })
    },
    components: {KmScroll},
    methods: {
      initList(scroll) {
        this.scroll = scroll
      },
      navItemClick(item, index) {
        this.$emit('nav-click', typeof item === 'object' ? Object.assign(item, {index}) : {name: item, index})
        this.activeIndex = index
      },
      computedWidth() {
        this.wrapperWidth = this.$refs.wrapper.$el.clientWidth
        this.listWidth = this.$refs.scroll.clientWidth
        this.optionScroll = this.listWidth > this.wrapperWidth
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .row-scroll-wrapper {
    position: relative;
    z-index: 3;
    height: rem-calc(88px);
    background-color: #fff;
    overflow: hidden;
    .scroll {
      display: flex;
      align-items: center;
      padding: 0 rem-calc(10px);
      height: rem-calc(88px);
      white-space: nowrap;
      li {
        flex: 1;
        margin: 0 rem-calc(20px);
        border-radius: rem-calc(26px);
        padding: 0 rem-calc(20px);
        height: rem-calc(50px);
        line-height: rem-calc(50px);
        font-size: rem-calc(28px);
        text-align: center;
        white-space: nowrap;
      }
      .scroll-item-active {
        font-weight: bold;
        color: #000000;
        background-color: #F4F4F4;
      }
    }
  }

  .row-wrapper {
    .scroll {
      position: absolute;
      top: 0;
      left: 0;
      li {
        flex: auto;
      }
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      height: 100%;
      width: rem-calc(30px);
      background: linear-gradient(to left, rgba(254, 254, 254, 1), rgba(254, 254, 254, 0.2));
    }
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      z-index: 2;
      height: 100%;
      width: rem-calc(30px);
      background: linear-gradient(to right, rgba(254, 254, 254, 1), rgba(254, 254, 254, 0.2));
    }
  }
</style>
