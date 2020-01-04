import WptButton from './stories/components/button';
import WptInput from './stories/components/input';
import WptClock from './stories/components/clock';
import WptKeyboard from './stories/components/keyboard';
import WptBadge from './stories/components/badge';
import WptQuantity from './stories/components/quantity';


const Toolkit = {
  WptButton,
  WptInput,
  WptClock,
  WptKeyboard,
  WptBadge,
  WptQuantity,
};

Toolkit.install = (Vue) => {
  Object.keys(Toolkit).forEach((key) => {
    Vue.component(key, Toolkit[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Toolkit);
}

export default Toolkit;
