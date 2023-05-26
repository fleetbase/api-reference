import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DocsApiIndexController extends Controller {
    @tracked language = 'bash';

    @action changeLanguage(language) {
        this.language = language;
    }
}
