'use strict';

angular.module('angularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/list-view', {
        templateUrl: 'views/list-view.html',
        controller: 'ListViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
