import angular from 'angular';

import { MainModule } from './main';
import { NavModule } from './nav';

export const ComponentsModule = angular.module('aly.app.components', [MainModule, NavModule]).name;
