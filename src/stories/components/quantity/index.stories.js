import { addDecorator} from '@storybook/vue';
import { withKnobs, number } from '@storybook/addon-knobs';
import quantity from './quantity.vue';
addDecorator(withKnobs);

export default {
    title: 'quantity',
    component: quantity,
    parameters: {
      componentSubtitle: '數量選擇器',
      notes: `
              [ 版本紀錄 ]
              1.0.0 版
      
              作者：Anne
          `,
    }
  };
  
  export const Quantity = () => ({
    components: { quantity },
    data() {
        return {
          val: this.value
        };
    },
    props: {
        value: {
            default: number('value', 1)
        },
        min: {
            default: number('min', 0)
        },
        max: {
            default: number('max', 99)
        },
    },
    methods: {
        input(val) {
          this.val = val;
        }
    },
    template: '<quantity :value="val" :min="min" :max="max" @input="input" />',
  });
  