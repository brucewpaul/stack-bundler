'use strict';

describe('Services', function () {
  beforeEach(module('myApp.services'));

  afterEach(inject(function ($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));


  describe('Items Factory', function () {
    var $httpBackend, Items;

    beforeEach(inject(function (_$httpBackend_, _Items_) {
      $httpBackend = _$httpBackend_;
      Items = _Items_;
    }));

    it('should exist', function () {
      expect(Items).to.exist;
    });

    it('should have a method `getAll`', function () {
      expect(Items.getAll).to.be.a('function');
    });

    it('should have a method `addOne`', function () {
      expect(Items.addOne).to.be.a('function');
    });

    it('should get all links with `getAll`', function () {
      var mockResponse = [
        { title: 'Test Title 1',
          text: 'Test Text 1' },
        { title: 'Test Title 2',
          text: 'Test Text 2' }
      ];

      $httpBackend.expect('GET', '/api/items').respond(mockResponse);

      Items.getAll().then(function (items) {
        expect(items).to.deep.equal(mockResponse);
      });

      $httpBackend.flush();
    });

    it('should add a new item with `addOne`', function () {
      var newItem = 'Test Text 1';

      $httpBackend
        .expect('POST', '/api/items', JSON.stringify({"text":"Test Text 1"}))
        .respond(201, 'Test Text 1');

      Items.addOne(newItem).then(function (resp) {
        expect(resp.status).to.equal(201);
        expect(resp.data).to.equal('Test Text 1');
      });

      $httpBackend.flush();
    });

  });

});


