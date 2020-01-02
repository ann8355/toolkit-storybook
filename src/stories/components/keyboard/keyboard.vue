<template>
<div class="wpt-keyboard">
  <component :is="genre" @keyin="keyin" :numberArray="numberArray"></component>
</div>
</template>

<script>
import Numbers from './numbers';

export default {
  name: 'Keyboard',
  props: {
    /**
      * 切換成某元件, default: Numbers
    */
    genre: {
      type: String,
      default: 'Numbers',
    },
    /**
      * 鍵盤按鈕上的數字
    */
    numberArray: {
      type: Array,
    },
  },
  methods: {
    keyin(key) {
      /**
       * 點擊鍵盤事件
       * @type {Event}
       * @event 'keyin'
       */
      this.$emit('keyin', key);
    },
  },
  components: {
    Numbers,
  },
};
</script>

<style>
</style>
