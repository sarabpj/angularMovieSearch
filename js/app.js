var app = angular.module('movieSearchApp', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/searchResults.html',
      controller: 'SearchController',
    })
    .when('/:id/show', {
      templateUrl: '../partials/show.html',
      controller: 'ShowController'
    })

  $locationProvider.html5Mode(true);
});