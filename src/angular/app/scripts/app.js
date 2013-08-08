'use strict';

angular.module('poc', ['ui.bootstrap', 'poc.jobApp.list', 'poc.service.jobs', 'poc.jobApp.temp'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:t', {
        templateUrl: 'job-list.html',
        controller: 'listCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
  .run(function ($rootScope,$location){
    $rootScope.$on('$routeChangeStart',function(event,next,current){
      if ($location.host() === 'localhost') {
        next.templateUrl = "views/"+next.templateUrl;
      } else {
        next.templateUrl = "apps/pocfun/views/"+next.templateUrl;
      }
    });
  });

