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
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/maria', {
        templateUrl: 'views/maria.html',
        controller: 'MariaCtrl',
        controllerAs: 'maria'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
