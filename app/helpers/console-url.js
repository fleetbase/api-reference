import { helper } from '@ember/component/helper';
import consoleUrl from '../utils/console-url';

export default helper(function consoleUrl([path = '', queryParams = {}]) {
  return consoleUrl(path, queryParams);
});
