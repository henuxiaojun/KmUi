<template>
  <div class="km-table" :class="[{'table-column': tableList && tableList.length < 3},{'table-row': tableList && tableList.length > 2}]">
    <div class="table-header">
      <div v-for="item in tableHeader" class="table-th">{{item}}</div>
    </div>
    <div v-for="item in tableList" class="table-body">
      <div v-for="value in item" class="table-th">{{value}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'km-table',
    props: {
      tableList: {
        type: Array,
        default: () => []
      },
      tableHeader: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-table {
    @extend %bd-l;
    @extend %bd-t;
    font-size: rem-calc(28px);
    word-wrap: break-word;
    word-break: break-all;
    display: table;
    width: 100%;
    .table-header {
      .table-th {
        @extend %bd-r;
        @extend %bd-b;
        padding: rem-calc(15px) rem-calc(10px);
        background-color: #F8F8F8;
        color: #888;
      }
    }
    .table-body {
      .table-th {
        @extend %bd-r;
        @extend %bd-b;
        padding: rem-calc(15px) rem-calc(10px);
        background-color: #fff;
        color: #000;
      }
    }
  }

  .table-row {
    .table-header {
      display: table-row-group;
    }
    .table-body {
      display: table-row-group;
    }
    .table-th {
      display: table-cell;
      max-width: rem-calc(297px);
      text-align: center;
    }
  }
  .table-column {
    display: flex;
    .table-body {
      flex: 1;
    }
  }
</style>
