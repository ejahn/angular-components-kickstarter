import angular from 'angular';

import Frontpage from './frontpage';

const components = angular
  .module('app.components', [
    Frontpage
  ])
  .name;

export default components;
