import baseUrl from '@fleetbase/api-reference/utils/base-url';
import { module, test } from 'qunit';

module('Unit | Utility | base-url', function () {
    // TODO: Replace this with your real tests.
    test('it works', function (assert) {
        let result = baseUrl();
        assert.ok(result);
    });
});
