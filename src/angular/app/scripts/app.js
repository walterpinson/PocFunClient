'use strict';

angular.module('poc', ['ui.bootstrap', 'poc.jobApp.list', 'poc.service.jobs', 'poc.jobApp.temp'])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/:t', {
            templateUrl: 'apps/pocfun/views/job-list.html',
            controller: 'listCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
