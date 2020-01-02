<template>
<div class="wpt-keyboard-numers" @click="type($event)">
  <button v-for="(item) in numberArray" :key="item.key" type="button" :data-key="item.key">
    <span>{{ item.text }}</span>
  </button>
  <button type="button" data-key="backspace">
    <img :src="require('./images/ic_backspace_black_48px.svg')" class="wptif-backspace" />
  </button>
</div>
</template>

<script>
export default {
  name: 'KeyboardNumbers',
  props: {
    numberArray: {
      type: Array,
      default: () => [{
        text: '1',
        key: '1',
      }, {
        text: '2',
        key: '2',
      }, {
        text: '3',
        key: '3',
      }, {
        text: '4',
        key: '4',
      }, {
        text: '5',
        key: '5',
      }, {
        text: '6',
        key: '6',
      }, {
        text: '7',
        key: '7',
      }, {
        text: '8',
        key: '8',
      }, {
        text: '9',
        key: '9',
      }, {
        text: 'C',
        key: 'clear',
      }, {
        text: '0',
        key: '0',
      }],
    },
  },
  methods: {
    type(event) {
      const target = event.target;
      if (target !== this.$el && target.dataset.key) {
        this.$emit('type', target.dataset.key);
      }
    },
  },
};
</script>

<style lang="scss">
.wpt-keyboard-numers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  button {
    margin: 1%;
    padding: 10% 1%;
    flex-basis: 31%;
    font-size: inherit;
    line-height: 1;

    * {
      pointer-events: none;
      vertical-align: middle;
    }

    .wptif-backspace {
      margin-bottom: .05em;
      margin-right: .06em;
    }
  }
}
</style>
