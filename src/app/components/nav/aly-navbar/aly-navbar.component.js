import template from './aly-navbar.html';
import './aly-navbar.css';

export const AlyNavbarComponent = {
    template,
    controller: class AlyNavbarComponent {
        constructor($state) {
            "ngInject";

            this.$state = $state;
        }

        getSelectedTab() {
            return this.$state.current.name.split('.')[1];
        }
    }
};
