import { getOwner } from '@ember/application';

export default function baseUrl(path = '') {
    const config = getOwner(this).resolveRegistration('config:environment');
    const rootURL = config.rootURL || '/'; // Use '/' as fallback if rootURL is not defined

    return `${rootURL}${path}`;
}
