'use strict';

describe('HomeController', function () {
  var $scope, $rootScope, createController, Items, $httpBackend;

  // using angular mocks, we can inject the injector
  // to retrieve our dependencies
  beforeEach(module('myApp'));
  beforeEach(inject(function ($injector) {

    // mock out our dependencies
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
    Items = $injector.get('Items');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');

    createController = function () {
      return $controller('HomeController', {
        $scope: $scope,
        Items: Items
      });
    };

  }));

  it('should have a data property on the $scope', function () {
    createController();
    expect($scope.data).to.be.an('object');
  });

  it('should call `Items.getAll()` when controller is loaded', function () {
    sinon.spy(Items, 'getAll');
    $httpBackend.expectGET('/api/items').respond(200);

    createController();
    $httpBackend.flush();

    expect(Items.getAll.called).to.equal(true);
    Items.getAll.restore();
  });

  it('should populate the data property after the call to `Items.getAll()`', function () {
    var mockItems = {results: {}};
    $httpBackend.expectGET('/api/items').respond(mockItems);

    createController();
    $httpBackend.flush();

    expect($scope.data.items).to.deep.equal({});
  });

  it('should add the item to the data after `submitForm()`', function () {
    $httpBackend.expectGET('/api/items').respond();
    $httpBackend.expectPOST('/api/items').respond(201, '');

    createController();

    $scope.submitForm();

    $httpBackend.flush();
  });
});
