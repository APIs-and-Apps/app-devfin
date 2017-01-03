'use strict';

/**
 * @ngdoc function
 * @name devfinApp.controller:AccountsCtrl
 * @description
 * # AccountsCtrl
 * Controller of the devfinApp
 */
angular.module('devfinApp')
  .controller('AccountsCtrl', function ($http, $window, API_URL) {

    var accounts = this;

    function loadAccounts() {
      $http.get(API_URL + '/accounts').then(function(success) {
        accounts.list = success.data;
      });
    }

    accounts.create = function(name) {
      $http.post(API_URL + '/accounts', {
        name: name
      }).then(function(success) {
        accounts.list.push({
          id: success.data.id,
          name: name
        })
      });
    };

    accounts.delete = function(account) {
      if ($window.confirm('Deseja excluir essa conta?')) {
        $http.delete(API_URL + '/accounts/' + account.id).then(function() {
          var index = _.indexOf(accounts.list, account);
          accounts.list.splice(index, true);
        });
      }
    };

    loadAccounts();

  });
