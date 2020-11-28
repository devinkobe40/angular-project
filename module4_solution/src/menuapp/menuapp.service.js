(
  function () {
    'use strict';

    angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com");

    MenuDataService.inject = ['$http', 'ApiBaseUrl']
    function MenuDataService($http, ApiBaseUrl) {
      var data = this;


      data.getAllCategories = function () {
        return $http({
          method: 'GET',
          url: (ApiBaseUrl + "/categories.json")
        })
        .then( function (response) {
          var list = [];
          var category = response.data;
            for (var i = 0; i < category.length; i++) {
              list.push(category[i])
            }
            return list;
        });


      }

      data.getItemsForCategory = function (short_name) {

        return $http({
          method: 'GET',
          url: (ApiBaseUrl + "/menu_items.json"),
          params: {
            category: short_name,
          }
        })
        .then(function (response) {
          // var menu_list = [];
          var items = response.data.menu_items;
          return items;
          // for (var i = 0; i < items.length; i++) {
          //   menu_list.push(items[i]);
          // }

          // console.log("list: ",menu_list);

        });

      }

    }

  }
)();
