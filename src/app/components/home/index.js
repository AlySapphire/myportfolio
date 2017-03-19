import angular from 'angular';

import { AlyHomeComponent } from './aly-home/aly-home.component.js';

export const HomeModule = angular.module('aly.app.components.home', [])
    .component('alyHome', AlyHomeComponent)
    .name;
