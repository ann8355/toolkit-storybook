import { addDecorator } from '@storybook/vue';
import { withKnobs, number } from '@storybook/addon-knobs';
import badge from './badge.vue';
addDecorator(withKnobs);

export default {
  title: 'badge',
  component: badge,
  parameters: {
    componentSubtitle: '數字標籤',
    notes: `
            [ 版本紀錄 ]
            1.0.0 版
    
            作者：Anne
        `,
  }
};

export const Badge = () => ({
  components: { badge },
  props: {
    numbers: {
      default: number('numbers', 50)
    },
  },
  template: '<badge :numbers="numbers" />',
});
