'use strict';

angular.module('poc.jobApp.list', [])
  .controller('listCtrl', function ($scope, $http, jobService) {
    $scope.jobs = [];
    jobService
            .getJobs()
            .success(function(data, status, headers, config) {
                $scope.jobs = data;
            });
  });
