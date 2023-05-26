import EmberRouter from '@ember/routing/router';
import config from '@fleetbase/api-reference/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('docs', { path: '/' }, function () {
        this.route('api', { path: '/' }, function () {});
    });
});
