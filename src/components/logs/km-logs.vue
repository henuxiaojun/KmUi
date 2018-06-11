<template>
  <div class="km-logs">
    <div class="logs-header">
      <div class="logs-header-content">
        <span class="logs-title">当前状态</span>
        <span class="logs-status">待审批</span>
        <span class="logs-slide"
              v-if="logsList.length"
              @click="listSlide"
              :class="{'logs-slide-up': !isShow}"
        ></span>
      </div>
    </div>
    <transition name="list-slide">
      <ul class="logs-list" v-if="isShow">
        <li class="log"
            v-for="(log,key) in logsList"
            :class="[
            {'log-pass': log.status === 1},
            {'log-deny': log.status === 2},
            {'log-current': currentIndex === key}
          ]"
        >
          <span class="log-icon"></span>
          <div class="log-content">
            <span class="log-name">{{log.username}}</span>
            <span class="log-time">{{log.datetime}}</span>
            <span class="log-reason">{{log.refuseReason}}</span>
          </div>
          <span class="log-status">{{log.description}}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'km-logs',
    props: {
      reverse: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        logs: [
          {
          "username": "李军",
          "description": "审批通过",
          "datetime": "2018-05-07 13:07:48",
          "refuseReason": "",
          "status": 1
        }, {
          "username": "韩洪彬",
          "description": "审批通过",
          "datetime": "2018-05-07 13:08:19",
          "refuseReason": "",
          "status": 1
        }, {
          "username": "韩红昌",
          "description": "审批通过",
          "datetime": "2018-05-07 15:16:11",
          "refuseReason": "",
          "status": 1
        }, {
          "username": "耿菲",
          "description": "审批未通过",
          "datetime": "2018-05-24 18:11:26",
          "refuseReason": "测试理由测试理由测试理由测试理由测试理由",
          "status": 2
        }],
        isShow: true
      }
    },
    created() {
    },
    mounted() {
    },
    computed: {
      logsList() {
        if (this.reverse) {
          return this.logs.reverse()
        }
        return this.logs
      },
      currentIndex() {
        for (let i = 0;i< this.logsList.length;i++) {
          if (this.logsList[i].status === 2) {
            return -1
          }
          if (this.logsList[i].status === 1) {
            return i
          }
        }
      }
    },
    components: {},
    methods: {
      listSlide() {
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-logs {
    .logs-header {
      background-color: #fff;
      .logs-header-content {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: rem-calc(30px);
        height: rem-calc(72px);
        font-size: rem-calc(30px);
        @extend %bd-b;
      }
      .logs-title {
        color: $color-text-secondary;
      }
      .logs-status {
        margin-left: rem-calc(30px);
        color: $color-text-link;
      }
      .logs-slide {
        position: absolute;
        top: 50%;
        right: rem-calc(30px);
        width: rem-calc(44px);
        height: rem-calc(44px);
        line-height: rem-calc(44px);
        @include bg-img(url('../../assets/icon-arrow-down.svg'));
        transition: transform 0.3s linear;
        transform-origin: 75% 50%;
        transform: translate3d(0, -50%, 0);
      }
      .logs-slide-up {
        transform: translate3d(0, -50%, 0) rotateZ(180deg);
      }
    }
    .logs-list {
      padding-top: rem-calc(35px);
      padding-bottom: rem-calc(35px);
      background-color: #fff;
      .log {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-left: rem-calc(34px);
        border-left: rem-calc(4px) solid $color-border-main;
        padding: 0 rem-calc(30px) rem-calc(25px) rem-calc(44px);
        min-height: rem-calc(84px);
        line-height: rem-calc(30px);
        .log-icon {
          position: absolute;
          top: 0;
          left: rem-calc(-2px);
          z-index: 1;
          border-radius: 50%;
          width: rem-calc(24px);
          height: rem-calc(24px);
          background-color: $color-border-main;
          transform: translate3d(-50%, 0, 0);
        }
        .log-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .log-name {
            margin-bottom: rem-calc(12px);
            font-size: rem-calc(30px);
          }
          .log-time {
            font-size: rem-calc(24px);
            color: #8b8b8d;
          }
          .log-reason {
            max-width: rem-calc(450px);
          }
        }
        &:last-child {
          border-left: none;
          .log-icon {
            left: rem-calc(1px);
          }
        }
      }
      .log-pass {
        border-left: rem-calc(4px) solid $color-fill-icon;
        .log-icon {
          @include bg-img(url('../../assets/icon-timeline-up.svg'))
        }
      }
      .log-current {
        .log-name {
          color: #000;
        }
        .log-icon {
          @include bg-img(url('../../assets/icon-state-success.svg'));
          width: rem-calc(32px);
          height: rem-calc(32px);
        }
        .log-status {
          color: #000;
        }
      }
      .log-deny {
        border-left: rem-calc(4px) solid $color-fill-tag;
        .log-name {
          color: #000;
        }
        .log-icon {
          @include bg-img(url('../../assets/icon-state-fail.svg'));
          width: rem-calc(32px);
          height: rem-calc(32px);
        }
        .log-status {
          color: #FF644C;
        }
      }
    }
  }
  .list-slide-enter-active,.list-slide-leave-active {
    transition: transform 0.3s linear;
    transform-origin: top;
  }
  .list-slide-enter,.list-slide-leave-to {
    transform: scaleY(0);
  }
</style>
