'use strict';

/**
 * @ngdoc overview
 * @name devfinApp
 * @description
 * # devfinApp
 *
 * Main module of the application.
 */
angular
  .module('devfinApp', [
    'config',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsCtrl',
        controllerAs: 'reports'
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl',
        controllerAs: 'accounts'
      })
      .when('/facts', {
        templateUrl: 'views/facts.html',
        controller: 'FactsCtrl',
        controllerAs: 'facts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
