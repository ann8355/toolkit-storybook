import { addDecorator } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import clock from './clock.vue';
addDecorator(withKnobs);

export default {
    title: 'clock',
    component: clock,
    parameters: {
      componentSubtitle: '自定義時間格式的時鐘',
      notes: `
              [ 版本紀錄 ]
              1.0.0 版
      
              作者：Anne
          `,
    }
  };
  
  export const Clock = () => ({
    components: { clock },
    props: {
        format: {
            default: text('format', 'YYYY-MM-DD HH:mm (dd)')
        },
        locale: {
            default: text('locale', 'zh-CN')
        },
    },
    template: '<clock :format="format" :locale="locale" />',
  });
