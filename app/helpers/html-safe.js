import { helper } from '@ember/component/helper';
import { htmlSafe as htmlSafeUtil } from '@ember/template';

export default helper(function htmlSafe([trustedString]) {
    return htmlSafeUtil(trustedString);
});
