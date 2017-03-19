import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';

import 'angular-material/angular-material.min.css';
import 'material-design-icons/iconfont/material-icons.css';

import './main.css';

import { AppModule } from './app';
import { AlyRoutes } from './aly.routes.js';
import { ThemingConfig } from './theming.config.js';

export const AlyModule = angular.module('aly', [angularUiRouter, angularMaterial, AppModule])
    .config(AlyRoutes)
    .config(ThemingConfig)
    .name;
