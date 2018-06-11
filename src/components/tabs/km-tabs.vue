<template>
  <div class="km-tabs">
    <ul class="km-tabs-list">
      <li class="tab-item"
          v-for="(tab,index) in tabsList"
          :key="index"
          :class="{'tab-active': activeIndex === index}"
          @click="tabClick(tab, index)"
      >
        <div class="km-tabs-dots" :style="{'transform': `translate3d(${activeIndex}00%, 0, 0)`}" v-if="index === 0"><span class="dot"></span></div>
        {{tab.name || tab}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'km-tabs',
    props: {
      tabsList: {       //数组内如果是对象则必须包含name属性。
        type: Array,
        default: () => [
          '选项1',
          '选项2',
          '选项3',
          '选项4'
        ]
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      tabClick(tab, index) {
        this.activeIndex = index
        this.$emit('tab', typeof tab === 'object' ? Object.assign(tab, {index}) : {name: tab, index})
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";
  .km-tabs-list {
    position: relative;
    display: flex;
    height: rem-calc(84px);
    background-color: #fff;
    .tab-item {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .km-tabs-dots {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: rem-calc(6px);
        text-align: center;
        font-size: 0;
        transition: transform .2s linear;
        .dot {
          display: inline-block;
          width: rem-calc(50px);
          height: rem-calc(6px);
          background-color: #FFAA00;
        }
      }
    }
    .tab-active {
      font-size: rem-calc(32px);
      font-weight: bold;
      color: #000;
    }
    > span {
      position: absolute;
      bottom: 0;
      width: rem-calc(50px);
      height: rem-calc(6px);
      background-color: $color-text-link;
    }
  }
</style>
