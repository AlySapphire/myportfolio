import angular from 'angular';

import { AlyNavbarComponent } from './aly-navbar/aly-navbar.component.js';

export const NavModule = angular.module('aly.app.components.nav', [])
    .component('alyNavbar', AlyNavbarComponent)
    .name;
