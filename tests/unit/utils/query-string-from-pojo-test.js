import queryStringFromPojo from '@fleetbase/api-reference/utils/query-string-from-pojo';
import { module, test } from 'qunit';

module('Unit | Utility | query-string-from-pojo', function () {
    // TODO: Replace this with your real tests.
    test('it works', function (assert) {
        let result = queryStringFromPojo();
        assert.ok(result);
    });
});
