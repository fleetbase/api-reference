import { module, test } from 'qunit';
import { setupRenderingTest } from '@fleetbase/api-reference/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | code-snippet', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<CodeSnippet />`);

        assert.dom(this.element).hasText('');

        // Template block usage:
        await render(hbs`
      <CodeSnippet>
        template block text
      </CodeSnippet>
    `);

        assert.dom(this.element).hasText('template block text');
    });
});
