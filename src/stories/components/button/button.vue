<template>
<button type="button" class="wpt-button" @click="onclick($event)">
  <!-- @slot 插入一串自定義文字 -->
  <slot name="text"></slot>
</button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    onclick(event) {
      /**
       * 點擊事件
       * @type {Event}
       */
      this.$emit('click', event);
      this.ripple(event);
    },
    ripple(event) {
      const el = this.$el;
      const circle = document.createElement('div');

      const d = Math.max(el.clientWidth, el.clientHeight);
      circle.style.width = `${d}px`;
      circle.style.height = `${d}px`;

      const rect = el.getBoundingClientRect();
      const radius = d / 2;
      const left = event.clientX - rect.left - radius;
      const top = event.clientY - rect.top - radius;

      circle.style.left = `${left}px`;
      circle.style.top = `${top}px`;
      circle.setAttribute('class', 'ripple');

      el.appendChild(circle);

      setTimeout(() => {
        el.removeChild(circle);
      }, 450);
    },
  },
};
</script>

<style lang="scss">
.wpt-button {
  border: none;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  outline: 0;

  * {
    pointer-events: none;
  }

  .ripple {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    opacity: .6;
    transform: scale(0);
    animation: ripple 0.4s linear;
  }
}

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
