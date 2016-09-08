(function () {
  'use strict';

  angular
    .module('jobs.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('jobs', {
        abstract: true,
        url: '/jobs',
        template: '<ui-view/>'
      })
      .state('jobs.list', {
        url: '',
        templateUrl: 'modules/jobs/client/views/list-jobs.client.view.html',
        controller: 'JobsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Jobs List'
        }
      })
      .state('jobs.view', {
        url: '/:jobId',
        templateUrl: 'modules/jobs/client/views/view-job.client.view.html',
        controller: 'JobsController',
        controllerAs: 'vm',
        resolve: {
          jobResolve: getjob
        },
        data: {
          pageTitle: 'job {{ jobResolve.title }}'
        }
      });
  }

  getjob.$inject = ['$stateParams', 'JobsService'];

  function getjob($stateParams, JobsService) {
    return JobsService.get({
      jobId: $stateParams.jobId
    }).$promise;
  }
}());
