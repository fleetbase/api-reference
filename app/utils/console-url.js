import config from '../config/environment';
import queryStringFromPojo from './query-string-from-pojo';
import { isBlank } from '@ember/utils';

export default function consoleUrl(path = '', queryParams = {}) {
    let url = 'https://console.';
    let urlParams = !isBlank(queryParams) ? queryStringFromPojo(queryParams) : '';

    if (['qa', 'staging'].includes(config.environment)) {
        url += `${config.environment}.`;
    }

    if (['local', 'development'].includes(config.environment)) {
        url += 'fleetbase.dev';
    } else {
        url += 'fleetbase.io';
    }

    url += `/${path}`;

    if (urlParams) {
        url += `?${urlParams}`;
    }

    return url;
}
