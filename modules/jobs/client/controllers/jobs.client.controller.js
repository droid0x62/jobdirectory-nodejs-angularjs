(function () {
  'use strict';

  angular
    .module('jobs')
    .controller('JobsController', JobsController);

  JobsController.$inject = ['$scope', 'jobResolve', 'Authentication'];

  function JobsController($scope, job, Authentication) {
    var vm = this;

    vm.job = job;
    vm.authentication = Authentication;
    vm.error = null;

  }
}());
