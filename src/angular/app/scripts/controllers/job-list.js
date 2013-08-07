'use strict';

angular.module('poc.jobApp.list', [])
  .controller('listCtrl', function ($scope, $http, $routeParams, jobService) {
    $scope.jobs = [];
    $scope.token = $routeParams.t;

    jobService
            .getJobs($scope.token)
            .success(function(data, status, headers, config) {
                $scope.jobs = data;
            });
  });
