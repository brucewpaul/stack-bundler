'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // We are going to add to add a ! to the url
  $locationProvider.hashPrefix('!');

  // if no route is found, send user to '/' (home)
  $routeProvider.otherwise({redirectTo: '/'});
}]);
