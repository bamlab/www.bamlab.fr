'use strict';

angular.module('homepage', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'oob-effects'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })

      .state('performance', {
        url: '/performance',
        templateUrl: 'app/performance/performance.html',
        controller: 'PerformanceCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
