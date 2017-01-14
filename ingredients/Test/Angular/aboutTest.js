'use strict';

describe('AboutController', function () {
  var $scope, $rootScope, createController, Items, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('myApp'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('AboutController', {
        $scope: $scope
      });
    };

  }));

  it('should exist', function () {
    var controller = createController();
    expect(controller).to.exist;
  });
});
