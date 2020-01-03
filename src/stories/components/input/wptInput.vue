<template>
<div class="wpt-input" :class="{floating: isFloating()}">
  <label v-if="label">{{label}}</label>
  <input ref="field" :type="genre" :id="id"
    @input="input($event)"
    @focus="focus($event)"
    @blur="blur($event)"
    @change="change($event)"
    @mousedown="mousedown($event)"
    @keyup="keyup($event)"
  />
</div>
</template>

<script>
export default {
  name: 'wptInput',
  props: {
    /**
      * 輸入框標籤名稱
    */
    label: {
      type: String,
    },
    /**
      * 輸入框類型, ex: 'text','number','password','email','tel','date'
    */
    genre: {
      type: String,
      default: 'text',
    },
    /**
      * 輸入框的id名稱
    */
    id: {
      tpye: String,
    },
  },
  data() {
    return {
      isFocus: false,
    };
  },
  methods: {
    isFloating() {
      const field = this.$refs.field;
      const value = field ? field.value : '';
      const focused = this.isFocus;
      const hasLabel = !!this.label;
      return hasLabel && !value && !focused;
    },
    input(event) {
      this.value = event.target.value;
      /**
       * 輸入文字觸發的事件
       * @type {Event}
       */
      this.$emit('input', event);
    },
    focus(event) {
      this.isFocus = true;
       /**
       * 游標觸控時的事件
       * @type {Event}
       */
      this.$emit('focus', event);
    },
    blur(event) {
      this.isFocus = false;
      /**
       * 游標遠離時的事件
       * @type {Event}
       */
      this.$emit('blur', event);
    },
    change(event) {
      /**
       * 輸入文字改變的事件
       * @type {Event}
       */
      this.$emit('change', event);
    },
    keyup(event) {
      /**
       * 放開鍵盤時的事件
       * @type {Event}
       */
      this.$emit('keyup', event);
    },
    mousedown(event) {
      event.target.focus();
    },
  },
};
</script>

<style lang="scss">
@import '~@/stories/assets/css/addon/main';

.wpt-input {
  overflow: hidden;

  label {
    display: table;
    line-height: 1;
    color: rgba(0, 0, 0, .54);
    pointer-events: none;
    transition:
      color .1s ease,
      transform .2s ease,
      -webkit-transform .2s ease;
  }

  input {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: inherit;
    line-height: 2;
    background: none;
    border: none;
    border-bottom-color: rgba(0,0,0,.12);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &.floating {
    label {
      transform: translateX(.15em) translateY(1.5em) scale(1.1);
    }
  }

  &.error {
    label, input {
      color: $error;
    }
  }

  &.success {
    label, input {
      color: $success;
    }
  }
}
</style>