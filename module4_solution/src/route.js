(
  function (){
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){


      // Redirect if the user entered a wrong url
      $urlRouterProvider.otherwise('/');

      // Set up states
      $stateProvider

      .state('home', {
          url:'/',
          templateUrl: 'src/menuapp/templates/home.template.html'
      })

      .state('categories',{
        url:'/categories',
        templateUrl: 'src/menuapp/templates/category.template.html',
        controller: 'MenuAppCategoryController as categoryList',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('menuDetail',{
        url:'/menu-detail/{short_name}',
        templateUrl: 'src/menuapp/templates/menu-detail.template.html',
        controller: 'MenuAppDetailController as menuDetail',
        resolve: {
          menu: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              // return MenuDataService.getAllCategories();

              return MenuDataService.getItemsForCategory($stateParams.short_name);
              // return MenuDataService.test($stateParams.short_name);
            }]
        }
      });
    }
  }
)();
