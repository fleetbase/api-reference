/* eslint-disable ember/no-computed-properties-in-native-classes */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed, set } from '@ember/object';

export default class SdkCodeSnippetComponent extends Component {
    @tracked languages = [
        { name: 'Bash', value: 'bash' },
        { name: 'Javascript', value: 'js' },
        { name: 'PHP', value: 'php' },
    ];

    @tracked _lang;

    @computed('args.lang', '_lang') get lang() {
        if (this._lang) {
            return this._lang;
        }

        if (this.args.lang) {
            return this.args.lang;
        }

        return 'bash';
    }

    set lang(lang) {
        this._lang = lang;
    }

    @computed('args.name', 'lang') get snippetName() {
        return `${this.args.name}.${this.lang}`;
    }

    @action onChangeLanguage(selected) {
        set(this, 'lang', selected);

        if (typeof this.args.onLanguageChange === 'function') {
            this.args.onLanguageChange(selected);
        }
    }

    @action watchChange(event) {
        this.onChangeLanguage(event?.target?.value);
    }
}
