(function () {
  'use strict';

  angular
    .module('jobs.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.jobs', {
        abstract: true,
        url: '/jobs',
        template: '<ui-view/>'
      })
      .state('admin.jobs.list', {
        url: '',
        templateUrl: 'modules/jobs/client/views/admin/list-jobs.client.view.html',
        controller: 'JobsListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.jobs.create', {
        url: '/create',
        templateUrl: 'modules/jobs/client/views/admin/form-job.client.view.html',
        controller: 'JobsController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          jobResolve: newJob
        }
      })
      .state('admin.jobs.edit', {
        url: '/:jobId/edit',
        templateUrl: 'modules/jobs/client/views/admin/form-job.client.view.html',
        controller: 'JobsController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          jobResolve: getJob
        }
      });
  }

  getJob.$inject = ['$stateParams', 'JobsService'];

  function getJob($stateParams, JobsService) {
    return JobsService.get({
      jobId: $stateParams.jobId
    }).$promise;
  }

  newJob.$inject = ['JobsService'];

  function newJob(JobsService) {
    return new JobsService();
  }
}());
