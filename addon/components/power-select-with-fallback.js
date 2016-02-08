import Ember from 'ember';
import layout from '../templates/components/power-select-with-fallback';

const { get } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',
  // CPs
  mustFallback: false, // TODO: Implement some built in criteria

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
