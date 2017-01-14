'use strict';

describe('Routing', function () {
  var $route;
  beforeEach(module('myApp'));

  beforeEach(inject(function ($injector) {
    $route = $injector.get('$route');
  }));

  it('Should have / route, template, and controller that point to signin', function () {
    expect($route.routes['/']).to.be.defined;
    expect($route.routes['/'].controller).to.equal('HomeController');
    expect($route.routes['/'].templateUrl).to.equal('home/home.html');
  });

  it('Should have /signup route, template, and controller', function () {
    expect($route.routes['/about']).to.be.defined;
    expect($route.routes['/about'].controller).to.equal('AboutController');
    expect($route.routes['/about'].templateUrl).to.equal('about/about.html');
  });
});
