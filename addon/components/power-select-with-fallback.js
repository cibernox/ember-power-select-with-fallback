import Ember from 'ember';
import layout from '../templates/components/power-select-with-fallback';
import isIos from '../utils/is-ios';
import isAndroid from '../utils/is-android';
import isWindowsPhone from '../utils/is-windows-phone';
import isMobile from '../utils/is-mobile';

const { get, computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  matchTriggerWidth: true,


  // CPs
  mustFallback: computed('fallback-when', function() {
    let fallbackStrategy = this.get('fallback-when');
    switch(fallbackStrategy) {
      case 'mobile':
        return isMobile();
      case 'ios':
        return isIos();
      case 'android':
        return isAndroid();
      case 'windows-phone':
        return isWindowsPhone();
      case undefined:
        return false;
      case null:
        return false;
      default:
        throw new Error(`Unknown fallback strategy ${fallbackStrategy}`);
    }
  }),

  // Actions
  actions: {
    handleChange(e) {
      let val = e.target.value;
      let selected;
      if (val.indexOf('.') > -1) {
        let [indexStr, subindexStr] = val.split('.');
        let index = parseInt(indexStr, 10);
        let subindex = parseInt(subindexStr, 10);
        let group = Ember.A(this.get('options')).objectAt(index);
        selected = Ember.A(get(group, 'options')).objectAt(subindex);
      } else {
        let index = parseInt(val, 10);
        selected = Ember.A(this.get('options')).objectAt(index);
      }
      this.get('onchange')(selected, null); // Public API is not passed
    }
  }
});
