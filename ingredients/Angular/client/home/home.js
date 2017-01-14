'use strict';

// we create a module on our app, and we will require ngRoute, allowing us to be displayed when on the current route
// More Info: https://docs.angularjs.org/api/ngRoute
angular.module('myApp.home', ['ngRoute', 'myApp.services'])

// We only want to display this view if we're on the home ('/') route
  // This works because we included ngRoute above
// More Info: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    });
}])


// We create a HomeController and assign it to this route. This allows us to specific things with this view (i.e. get data from the server and add it to the scope where we can then display it)
// More Info ($scope): https://docs.angularjs.org/guide/scope
// More Info (Controller): https://docs.angularjs.org/guide/controller
.controller('HomeController', ['$scope', 'Items', function($scope, Items) {
  // TODO: add comments for below
  $scope.data = {
    items: []
  };
  Items.getAll().then(function(resp) {
    if ( resp ) {
      $scope.data.items = resp.results;
    } else {
      $scope.data.items = {};
    }
  });
  $scope.addItem = Items.addOne;
  $scope.submitForm = function(item) {
    $scope.addItem(item);
    $scope.data.items.push({text: item});
    if ( $scope.newItem ) {
      $scope.newItem.$setPristine(true);
    }
    $scope.item = null;
  }
}]);