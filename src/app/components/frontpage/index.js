import angular from 'angular';
import 'angular-ui-router';
import FrontpageComponent from './frontpage.component';

const Frontpage = angular
  .module('components.frontpage', [
    'ui.router'
  ])
  .component('frontpage', FrontpageComponent)
  .config( /** @ngInject */ $stateProvider => {
    $stateProvider
      .state('frontpage', {
        url: '/',
        component: 'frontpage'
      });
  })
  .name;

export default Frontpage;
