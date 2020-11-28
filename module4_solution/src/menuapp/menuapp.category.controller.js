(
  function () {
    'use strict';

    angular.module('Data')
    .controller('MenuAppCategoryController',MenuAppCategoryController);

    MenuAppCategoryController.inject = ['MenuDataService','categories'];
    function MenuAppCategoryController(MenuDataService,categories) {
      var category = this;
      category.categories = categories;

    }

  }
)();
