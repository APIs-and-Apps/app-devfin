'use strict';

/**
 * @ngdoc function
 * @name devfinApp.controller:FactsCtrl
 * @description
 * # FactsCtrl
 * Controller of the devfinApp
 */
angular.module('devfinApp')
  .controller('FactsCtrl', function ($http, API_URL) {

    var facts = this;

    function loadFacts() {
      $http.get(API_URL + '/facts?_sort=date').then(function(success) {
        facts.list = success.data;
      });
    };

    loadFacts();

  });
