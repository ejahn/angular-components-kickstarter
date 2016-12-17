const AppConfig = ($locationProvider, $urlRouterProvider) => {
  /** @ngInject */
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');
};

export default AppConfig;
