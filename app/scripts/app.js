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
      .otherwise({
        redirectTo: '/'
      });
  });
