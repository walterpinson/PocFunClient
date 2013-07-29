'use strict';

angular.module('poc', ['ui.bootstrap', 'poc.jobApp.list', 'poc.service.jobs', 'poc.jobApp.temp'])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/#t', {
            templateUrl: 'apps/pocfun/views/job-list.html' + "hello.dude",
            controller: 'listCtrl'
        })
        .when('/', {
            templateUrl: 'apps/pocfun/views/job-list.html' + $scope.token,
            controller: 'listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
