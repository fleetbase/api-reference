import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class ScrollLinkComponent extends Component {
    /**
     * The dom targer to scroll on
     *
     * @var string
     */
    @computed('args.target') get target() {
        const { target } = this.args;
        if (target) {
            return target;
        }

        return 'html, body';
    }

    /**
     * Determines link active state
     *
     * @var boolean
     */
    @tracked isActive = false;

    /**
     * On insert we need to watch for location.hash change to handle the active state
     *
     * @void
     */
    @action setupScroll(element) {
        const { hash } = window.location;

        window.addEventListener('hashchange', () => {
            this.isActive = hash === element.hash;
        });

        if (hash === element.hash) {
            this.isActive = true;
            this.scrollTo(element);
            this.simulateClick(element);
        }

        // add scroll-link class
        element.classList.add('scroll-link');

        if (this.args?.expandable === true) {
            element.classList.add('expandable');
        }

        this.observeContentScroll(element);
    }

    @action observeContentScroll(element) {
        const scrollTarget = document.querySelector(this.target);
        const contentTarget = document.querySelector(element.hash);

        if (!scrollTarget || !contentTarget) {
            return;
        }

        scrollTarget.addEventListener('scroll', () => {
            const start = contentTarget.offsetTop;
            const end = contentTarget.offsetTop + contentTarget.offsetHeight - 100;
            const scrollY = scrollTarget.scrollTop;

            if (scrollY >= start && scrollY <= end) {
                this.simulateClick(element);
            }
        });
    }

    /**
     * On click we want to scroll to that section and set hash in url
     *
     * @void
     */
    @action onClick(event) {
        event.preventDefault();

        const { target } = event;
        const { hash } = window.location;

        if (this.args?.expandable === true) {
            this.expand(target);
        }

        if (hash === target?.hash) {
            return;
        }

        this.scrollTo(target);
        this.simulateClick(target);
    }

    setHash(hash) {
        if (history.pushState) {
            history.pushState(null, null, hash);
        } else {
            location.hash = hash;
        }
    }

    scrollTo(target) {
        const expectingElement = document.querySelector(target.hash);

        if (expectingElement) {
            document.querySelector(this.target).scrollTop = expectingElement?.offsetTop;
        }
    }

    expand(target) {
        document.querySelectorAll(`.${[...target.classList].join('.')}`).forEach((link) => link.classList.remove('expanded'));
        target.classList.add('expanded');
    }

    simulateClick(target) {
        // set hash
        this.setHash(target.hash);

        // make active
        document.querySelectorAll(`a.sidebar-nav-item`).forEach((link) => link.classList.remove('active'));

        // set scroll link to active
        target.classList.add('active');

        // if has a parent
        if (target.closest('a + ul')?.previousElementSibling) {
            this.expand(target.closest('a + ul').previousElementSibling);
        }
    }
}
