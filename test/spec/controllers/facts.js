'use strict';

describe('Controller: FactsCtrl', function () {

  // load the controller's module
  beforeEach(module('devfinApp'));

  var FactsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FactsCtrl = $controller('FactsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FactsCtrl.awesomeThings.length).toBe(3);
  });
});
