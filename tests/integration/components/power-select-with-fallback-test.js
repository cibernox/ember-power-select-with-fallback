import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('power-select-with-fallback', 'Integration | Component | power select with fallback', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{power-select-with-fallback}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#power-select-with-fallback}}
      template block text
    {{/power-select-with-fallback}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
