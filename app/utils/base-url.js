import config from 'ember-get-config';

export default function baseUrl(path = '') {
    const rootURL = config.rootURL || '/';

    return `${rootURL}${path}`;
}
