import { addDecorator } from '@storybook/vue';
import { withKnobs, array } from '@storybook/addon-knobs';
import keyboard from './keyboard.vue';
// import { withInfo } from 'storybook-addon-vue-info';
// addDecorator(withInfo);
addDecorator(withKnobs);
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

export default {
  title: 'keyboard',
  component: keyboard,
  parameters: {
    componentSubtitle: '數字鍵盤',
    notes: `
            [ 版本紀錄 ]
            1.0.0 版
    
            作者：Anne
        `,
  }
};

export const Keyboard = () => ({
  components: { keyboard },
  props: {
    numberArray: {
      default: array('numberArray', defaultNums)
    },
  },
  methods: {
    keyin(val) {
      /**
        * 點擊鍵盤事件
        * @type {Event}
        * @event 'keyin'
      */
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
    <keyboard id="keyboard" :numberArray="numberArray" @keyin="keyin" />
  </div>`
});



// import { withKnobs, array } from '@storybook/addon-knobs';
// import keyboard from './keyboard.vue';
// import numbers from './numbers.vue';

// const stories = storiesOf('Keyboard', module);
// const defaultNums = [{
//     text: '1',
//     key: '1',
//   }, {
//     text: '2',
//     key: '2',
//   }, {
//     text: '3',
//     key: '3',
//   }, {
//     text: '4',
//     key: '4',
//   }, {
//     text: '5',
//     key: '5',
//   }, {
//     text: '6',
//     key: '6',
//   }, {
//     text: '7',
//     key: '7',
//   }, {
//     text: '8',
//     key: '8',
//   }, {
//     text: '9',
//     key: '9',
//   }, {
//     text: 'C',
//     key: 'clear',
//   }, {
//     text: '0',
//     key: '0',
//   }];
// stories.addDecorator(withKnobs);
// stories.add(
//     'keyboard',
//     () => ({
//         components: {
//             keyboard
//         },
//         props: {
//             numberArray: {
//                 default: array('numberArray', defaultNums)
//             },
//         },
//         methods: {
//             keyin(val) {
//               /**
//        * 點擊鍵盤事件
//        * @type {Event}
//        * @event 'keyin'
//        */
//                 const root = document.getElementById("textArea");
//                 const textnode = document.createTextNode(val);
//                 if (val === 'clear') {
//                   root.innerHTML = '';
//                 } else if(val === 'backspace') {
//                   root.removeChild(root.lastChild);
//                 } else {
//                   root.appendChild(textnode);
//                 }
//             }
//         },
//         template: `
//         <div>
//             <div id="textArea"></div>
//             <keyboard id="keyboard" :numberArray="defaultNums" @keyin="keyin" />
//         </div>
//         `
//     }), {
//         notes: `
//         [ 版本紀錄 ]
//         1.0.0 版

//         作者：Anne
//     `,
//         info: {
//             summary: '數字鍵盤'
//         }
//     }
// );
// stories.add(
//     'numbers',
//     () => ({
//         components: {
//             numbers
//         },
//         props: {
            
//         },
//         methods: {},
//         template: `
//             <numbers  />
//         `
//     }), {
//         notes: `
//         [ 版本紀錄 ]
//         1.0.0 版

//         作者：Anne
//     `,
//         info: {
//             summary: '鍵盤按鈕'
//         }
//     }
// );