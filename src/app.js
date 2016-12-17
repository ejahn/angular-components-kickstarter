import angular from 'angular';

import AppRun from './app.run';
import AppConfig from './app.config';

import AppComponent from './app.component';
import Components from './app/components/components';
import Common from './app/common/common';

import './index.scss';

const root = angular
  .module('app', [
    Components,
    Common,
    'ui.router'
  ])
  .component('app', AppComponent)
  .run(AppRun)
  .config(AppConfig)
  .name;

export default root;
