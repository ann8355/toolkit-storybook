import button from './button.vue';

export default {
  title: 'button',
  component: button,
  parameters: {
    componentSubtitle: '自訂格式的按鈕',
    notes: `
            [ 版本紀錄 ]
            1.0.0 版
    
            作者：Anne
        `,
  }
};

export const Button = () => ({
  components: { button },
  methods: {
    click() {
      alert('Hello!');
    }
  },
  template: `
  <button @click="click">
    <p slot="text">點擊我</p>
  </button>`,
});
