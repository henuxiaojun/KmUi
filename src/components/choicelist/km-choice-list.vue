<template>
  <div class="km-choice-list">
    <km-scroll>
      <ul class="choice-list">
        <li v-for="(item, index) in handlerList" class="choice-list-title">
          <span>{{item.letter}}</span>
          <ul class="content-list">
            <li class="choice-list-content"
                v-for="(name, index2) in item.data"
                @click="choiceItemClick(index, index2)">
              {{name}}
              <span class="choice-checked" :class="{'checked': activeIndex === index.toString() + index2.toString()}"></span>
            </li>
          </ul>
        </li>
      </ul>
    </km-scroll>
  </div>
</template>
<script>
  import KmScroll from '@/components/scroll/km-scroll'
  import sortString from '@/structure/tools/sortString'

  export default {
    name: 'km-choice-list',
    props: {},
    data() {
      return {
        list: ['赵阿斯', '钱古', '孙请你', '李哦啊', '周真不', '吴区域', '郑在', '王遇不', '冯额币', '陈恶补', '褚阿布', '卫确定', '蒋还哦', '沈吧嗯', '韩好办', '杨安全', '朱必报', '秦安素', '尤比去', '许女枪', '张三', '李四', '王五', '赵六'],
        activeIndex: '',
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
      handlerList() {
        return sortString(this.list)
      }
    },
    components: {KmScroll},
    methods: {
      choiceItemClick(index, index2) {
        this.activeIndex = index.toString() + index2.toString()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-choice-list {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .choice-list {
      display: flex;
      flex-direction: column;
      padding-bottom: rem-calc(45px);
      .choice-list-title {
        display: flex;
        flex-direction: column;
        background: #f4f4f4;
        > span {
          height: rem-calc(56px);
          line-height: rem-calc(56px);
          text-indent: rem-calc(30px);
        }
      }
      .content-list {
        background: #fff;
        .choice-list-content {
          @extend %bd-b;
          position: relative;
          display: flex;
          align-items: center;
          margin-left: rem-calc(30px);
          height: rem-calc(90px);
          &:last-child:after {
            width: 0;
          }
          .choice-checked {
            position: absolute;
            top: 50%;
            right: rem-calc(30px);
            width: rem-calc(30px);
            height: rem-calc(25px);
            transform: translate3d(0, -50%, 0);
            &.checked {
              @include bg-img(url('../../assets/icon-true.svg'))
            }
          }
        }
      }
    }
  }


</style>
