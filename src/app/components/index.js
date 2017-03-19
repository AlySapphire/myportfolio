import angular from 'angular';

import { HomeModule } from './home';
import { MainModule } from './main';
import { NavModule } from './nav';

export const ComponentsModule = angular.module('aly.app.components', [HomeModule, MainModule, NavModule]).name;
