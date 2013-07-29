'use strict';

angular.module('poc.jobApp.list', [])
  .controller('listCtrl', function ($scope, $http, $location, jobService) {
    $scope.jobs = [];
    $scope.token = ($location.search()).t;

    jobService
            .getJobs()
            .success(function(data, status, headers, config) {
                $scope.jobs = data;
            });
  });
