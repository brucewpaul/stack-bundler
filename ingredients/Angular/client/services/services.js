'use strict';

// We're creating a service to share and include in other modules (see home.js)
angular.module('myApp.services', [])

// Here we are creating a service which exports functions to add and retrieve items from the db
// More Info: https://docs.angularjs.org/guide/services
.factory('Items', function ($http, $location) {
  // TODO: add comments below
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/items'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addOne = function(item) {
    return $http({
      method: 'POST',
      url: '/api/items',
      data: {text: item}
    })
    .then(function(resp) {
      return resp;
    });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})