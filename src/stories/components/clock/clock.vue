<template>
<div class="wpt-clock">
  <span>{{display}}</span>
</div>
</template>

<script>
import Moment from 'moment';

export default {
  name: 'Clock',
  props: {
    /**
      * 時區語系, default: 瀏覽器語言, ex: "zh-CN"、"en"、"en-US"、"fr"、"es-ES"
    */
    locale: {
      type: String,
      default: navigator.language,
    },
    /**
      * 顯示的時間格式
    */
    format: {
      type: String,
    },
  },
  data() {
    return {
      display: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      Moment.locale(this.locale);
      this.update();
      setTimeout(() => {
        this.update();
        setInterval(this.update, 60000);
      }, 60000 - (this.moment.second() * 1000));
    },
    update() {
      this.moment = Moment();
      this.display = this.moment.format(this.format);
    },
  },
};
</script>

<style></style>
