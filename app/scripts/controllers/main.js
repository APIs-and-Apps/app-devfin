'use strict';

/**
 * @ngdoc function
 * @name devfinApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the devfinApp
 */
angular.module('devfinApp')
  .controller('MainCtrl', function ($rootScope) {

    var main = this;

    main.currentController = null;

    $rootScope.$on('$routeChangeStart', function(event, next) {
      main.currentController = next.$$route.controllerAs;
    });
  });

