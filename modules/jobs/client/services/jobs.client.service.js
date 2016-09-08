(function () {
  'use strict';

  angular
    .module('jobs.services')
    .factory('JobsService', JobsService);

  JobsService.$inject = ['$resource'];

  function JobsService($resource) {
    var Job = $resource('api/jobs/:jobId', {
      jobId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Job.prototype, {
      createOrUpdate: function () {
        var job = this;
        return createOrUpdate(job);
      }
    });

    return Job;

    function createOrUpdate(job) {
      if (job._id) {
        return job.$update(onSuccess, onError);
      } else {
        return job.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(job) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      console.log(error);
    }
  }
}());
