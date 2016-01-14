(function() {
  'use strict';

  angular
    .module('cirtusPay')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .state('home', {
    //   url: '/',
    //   templateUrl: 'app/main/main.html',
    //   controller: 'MainController',
    //   controllerAs: 'main'
    // })
      .state('base', {
      url: '/',
      templateUrl: 'app/citrus/citrus.template.html',
      controller: 'CitrusController',
      controllerAs: 'cit'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
