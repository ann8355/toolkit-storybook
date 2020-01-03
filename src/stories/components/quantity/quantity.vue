<template>
<div class="wpt-quantity">
  <button type="button" @mousedown="sub">-</button>
  <input
    type="number"
    pattern="[0-9]*"
    ref="input"
    :min="min"
    :max="max"
    :value="value"
    @change="onChanged"/>
  <button type="button" @mousedown="add">+</button>
</div>
</template>

<script>
export default {
  name: 'Quantity',
  props: {
    /**
      * 選擇器的初始值
    */
    value: {
      type: Number,
      default: 0,
    },
    /**
      * 顯示的最小值
    */
    min: {
      type: Number,
    },
    /**
      * 顯示的最大值
    */
    max: {
      type: Number,
    },
  },
  computed: {
    hasMax() {
      return !Number.isNaN(parseFloat(this.max));
    },
    hasMin() {
      return !Number.isNaN(parseFloat(this.min));
    },
  },
  methods: {
    update(value) {
      const val = parseInt(value, 10);
      if (!Number.isNaN(val)) {
      /**
       * 數字發生改變觸發的事件
       * @type {Event}
       */
        this.$emit('input', val);
        this.$refs.input.value = val;
      }
    },
    add() {
      const calc = this.value + 1;
      if (!this.hasMax) {
        this.update(calc);
      } else if (this.max >= calc) {
        this.update(calc);
      }
    },
    sub() {
      const calc = this.value - 1;
      if (!this.hasMin) {
        this.update(calc);
      } else if (this.min <= calc) {
        this.update(calc);
      }
    },
    onChanged() {
      let value = this.$refs.input.value;
      if (!value) {
        value = 0;
      } else if (this.hasMax && value > this.max) {
        value = this.max;
      } else if (this.hasMin && value < this.min) {
        value = this.min;
      }
      this.update(value);
    },
  },
};
</script>

<style lang="scss">
.wpt-quantity {
  display: flex;
  justify-content: center;
  align-items: stretch;

  input {
    padding: 0 .5rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }

  button {
    font-size: inherit;
    cursor: pointer;

    * {
      pointer-events: none;
    }
  }

  input, button {
    line-height: inherit;
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }
}
</style>
