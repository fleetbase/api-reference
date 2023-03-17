import { module, test } from 'qunit';
import { setupRenderingTest } from '@fleetbase/api-reference/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | api-doc/storefront-delivery-service-quotes',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ApiDoc::StorefrontDeliveryServiceQuotes />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ApiDoc::StorefrontDeliveryServiceQuotes>
        template block text
      </ApiDoc::StorefrontDeliveryServiceQuotes>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);