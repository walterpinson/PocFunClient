angular
    .module('poc.service.jobs', [])
    .factory('jobService', [
        '$http', '$location',
        function($resource) {
            var onEmpty = function() {
                window.location = '/404';
            };
            var _URL_ = 'http://api.pocfun.wp.dev/v1';
            return {
                getJobs: function(token) {
                    return $resource({
                        method: 'GET',
                        headers: {'Content-Type': 'application/json','PF-Api-Token': token },
                        isArray: true,
                        url: _URL_ + '/jobs'
                    });
                    //.error(onEmpty);
                }
            };
        }])
    .config(function($httpProvider){
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });