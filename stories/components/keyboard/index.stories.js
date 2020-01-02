import keyboard from './keyboard.vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, array } from '@storybook/addon-knobs';
import keyboard from './keyboard.vue';
import numbers from './numbers.vue';

const stories = storiesOf('Keyboard', module);
const defaultNums = [{
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
  }];
stories.addDecorator(withKnobs);
stories.add(
    'keyboard',
    () => ({
        components: {
            keyboard
        },
        props: {
            numberArray: {
                default: array('numberArray', defaultNums)
            },
        },
        methods: {
            keyin(val) {
                const root = document.getElementById("textArea");
                const textnode = document.createTextNode(val);
                if (val === 'clear') {
                  root.innerHTML = '';
                } else if(val === 'backspace') {
                  root.removeChild(root.lastChild);
                } else {
                  root.appendChild(textnode);
                }
            }
        },
        template: `
        <div>
            <div id="textArea"></div>
            <keyboard id="keyboard" :numberArray="defaultNums" @keyin="keyin" />
        </div>
        `
    }), {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        作者：Anne
    `,
        info: {
            summary: '數字鍵盤'
        }
    }
);
stories.add(
    'numbers',
    () => ({
        components: {
            numbers
        },
        props: {
            
        },
        methods: {},
        template: `
            <numbers  />
        `
    }), {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        作者：Anne
    `,
        info: {
            summary: '鍵盤按鈕'
        }
    }
);

// export default {
//   title: 'keyboard',
//   component: keyboard,
// };

// export const Keyboard = () => ({
//   components: { keyboard },
//   data () {
//     return {
//       defaultNums: [{
//         text: '1',
//         key: '1',
//       }, {
//         text: '2',
//         key: '2',
//       }, {
//         text: '3',
//         key: '3',
//       }, {
//         text: '4',
//         key: '4',
//       }, {
//         text: '5',
//         key: '5',
//       }, {
//         text: '6',
//         key: '6',
//       }, {
//         text: '7',
//         key: '7',
//       }, {
//         text: '8',
//         key: '8',
//       }, {
//         text: '9',
//         key: '9',
//       }, {
//         text: 'C',
//         key: 'clear',
//       }, {
//         text: '0',
//         key: '0',
//       }],
//       genre: 'Numbers'
//     }
// },
//   template: '<keyboard genre="Numbers" :numberArray="defaultNums" />',
// });