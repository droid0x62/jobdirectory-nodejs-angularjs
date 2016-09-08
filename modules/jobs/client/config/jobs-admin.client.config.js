(function () {
  'use strict';

  // Configuring the Jobs Admin module
  angular
    .module('jobs.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Jobs',
      state: 'admin.jobs.list'
    });
  }
}());
