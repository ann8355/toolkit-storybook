import { addDecorator } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import wptInput from './wptInput.vue';
addDecorator(withKnobs);

export default {
  title: 'wptInput',
  component: wptInput,
  parameters: {
    componentSubtitle: '客制輸入框',
    notes: `
            [ 版本紀錄 ]
            1.0.0 版
    
            作者：Anne
        `,
  }
};

export const WptInput = () => ({
  components: { wptInput },
  props: {
    label: {
      default: text('label', '名稱')
    },
    genre: {
      default: text('genre', 'text')
    },
  },
  template: '<wptInput :label="label" :genre="genre" style="width: 200px;"/>',
});
