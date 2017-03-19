import angular from 'angular';

import { AlyMainComponent } from './aly-main/aly-main.component.js';

export const MainModule = angular.module('aly.app.components.main', [])
    .component('alyMain', AlyMainComponent)
    .name;
