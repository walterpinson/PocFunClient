angular
    .module('poc.service.jobs', [])
    .factory('jobService', [
        '$http',
        function($resource) {

            return {
                getJobs: function() {
                    return $resource({
                        method: 'GET',
                        headers: {'Content-Type': 'application/json'},
                        isArray: true,
                        url: 'http://api.pocfun.wp.dev/v1/jobs'
                    });
                }
            };
        }])
    .config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });