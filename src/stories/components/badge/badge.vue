<template>
  <i v-if="available" class="wpt-badge">{{display}}</i>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    /**
      * 顯示的數字
    */
    numbers: {
      type: Number,
    },
    /**
      * 最大數字限制, default: 999
    */
    limit: {
      type: Number,
      default: 999,
    },
  },
  computed: {
    available() {
      return parseInt(this.numbers, 10) > 0;
    },
    display() {
      return this.numbers > this.limit ? `${this.limit}+` : this.numbers;
    },
  },
};
</script>

<style lang="scss">
.wpt-badge {
  padding: .25em .5em;
  display: inline-block;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 1em;
  background-color: #F44336;
  text-align: center;
  vertical-align: middle;
  font-style: normal;
  color: white;
}
</style>