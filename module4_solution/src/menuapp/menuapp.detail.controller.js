(
  function () {
    'use strict';

    angular.module('Data')
    .controller('MenuAppDetailController', MenuAppDetailController);

    MenuAppDetailController.inject = ['MenuDataService','menu']
    function MenuAppDetailController(MenuDataService,menu) {
      var detail = this;
      console.log("Menu: ", menu);
      detail.menu = menu;
    }

  }
)();
