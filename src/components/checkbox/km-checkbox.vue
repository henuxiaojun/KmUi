<template>
  <div class="km-checkbox">
    <label v-for="check in checkBoxGroup">
      {{check.name}}
      <input type="checkbox"
             v-if="!check.allChecked"
             :class="[
             {'checked': check.checked && !check.disabled},
             {'disabled': check.disabled && !check.checked},
             {'checked-disabled': check.disabled && check.checked}
             ]"
             :value="check"
             :disabled="check.disabled"
             @click.stop="checkClick(check)"
      >
      <input type="checkbox"
             v-else
             :class="{'checked': allCheckedStatus}"
             :checked="allCheckedStatus"
             @click.stop="allCheck"
      >
    </label>
  </div>
</template>
<script>
  export default {
    name: 'km-checkbox',
    props: {
      checkBoxGroup: {      //checked,disabled,allChecked
        type: Array,
        default: () => [
          {
            value: '123',
            checked: true,
            disabled: true
          },
          {
            value: '333',
            disabled: true
          },
          {
            value: 'asv'
          },
          {
            value: 'bbb'
          },
          {
            value: 'ggg'
          },
          {
            name: '全选',
            allChecked: true
          }
        ]
      }
    },
    data() {
      return {
      }
    },
    mounted() {
      this.initCheckBoxGroup()
    },
    computed: {
      checkedBox() {
        return this.checkBoxGroup.filter(item => {
          return item.checked
        })
      },
      allCheckedStatus() {
        return !this.checkBoxGroup.filter(item => {
          return !item.disabled && !item.checked && !item.allChecked
        }).length
      }
    },
    components: {},
    methods: {
      initCheckBoxGroup() {
        this.checkBoxGroup.forEach(item => {
          if (!item.checked) {
            this.$set(item, 'checked', false)
          }
          if (!item.disabled) {
            this.$set(item, 'disabled', false)
          }
        })
      },
      checkClick(check) {
        check.checked = !check.checked
        this.$emit('checked', this.checkedBox)
      },
      allCheck() {
        if (!this.allCheckedStatus) {
          this.checkBoxGroup.forEach(item => {
            if (!item.disabled && !item.allChecked) {
              item.checked = true
            }
          })
        } else {
          this.checkBoxGroup.forEach(item => {
            if (!item.disabled && !item.allChecked) {
              item.checked = false
            }
          })
        }
        this.$emit('checked', this.checkedBox)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "../../style/mixin/var";
  @import "../../style/mixin/rem-calc";
  @import "../../style/mixin/mixin";

  .km-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    label {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      margin-left: rem-calc(10px);
      margin-right: rem-calc(10px);
      border-radius: 50%;
      border: rem-calc(1px) solid $color-border-main;
      width: rem-calc(44px);
      height: rem-calc(44px);
    }
  }

  .checked {
    @include bg-img(url('../../assets/icon-radio-checked.svg'))
  }

  .disabled {
    background-color: #ddd;
  }

  .checked-disabled {
    @include bg-img(url('../../assets/selected+disabled.svg'))
  }
</style>
