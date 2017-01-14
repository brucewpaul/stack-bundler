'use strict';

// we create a module on our app, and we will require ngRoute, allowing us to be displayed when on the current route
// More Info: https://docs.angularjs.org/api/ngRoute
angular.module('myApp.about', ['ngRoute'])

// We only want to display this view if we're on the home ('/') route
  // This works because we included ngRoute above
// More Info: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'about/about.html',
    controller: 'AboutController'
  });
}])

// We create a HomeController and assign it to this route. This allows us to specific things with this view (i.e. get data from the server and add it to the scope where we can then display it)
// More Info ($scope): https://docs.angularjs.org/guide/scope
.controller('AboutController', ['$scope', function($scope) {

}]);