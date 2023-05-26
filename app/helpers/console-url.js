import { helper } from '@ember/component/helper';
import consoleUrlUtil from '../utils/console-url';

export default helper(function consoleUrl([path = '', queryParams = {}]) {
    return consoleUrlUtil(path, queryParams);
});
