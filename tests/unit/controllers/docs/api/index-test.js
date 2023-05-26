import { module, test } from 'qunit';
import { setupTest } from '@fleetbase/api-reference/tests/helpers';

module('Unit | Controller | docs/api/index', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        let controller = this.owner.lookup('controller:docs/api/index');
        assert.ok(controller);
    });
});
