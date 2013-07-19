'use strict';

angular.module('poc', ['poc.jobApp.list', 'poc.service.jobs', 'poc.jobApp.temp'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/job-list.html',
        controller: 'listCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
