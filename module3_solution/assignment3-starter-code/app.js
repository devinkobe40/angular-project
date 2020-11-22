(
    function() {
        'use strict';

        angular.module('NarrotItDownApp', [])
            .controller('NarrowItDownController', NarrowItDownController)
            .service('MenuSearchService', MenuSearchService)
            .constant('ApiBaseUrl', "https://davids-restaurant.herokuapp.com/menu_items.json")
            .directive('foundItem', foundItem);


        function foundItem() {
            var ddo = {
                templateUrl: 'founditem.html',
                scope: {
                    foundItems: '<',
                    myTitle: '@title',
                    onRemove: '&',
                },
                controller: MenuItemsDirectiveController,
                controllerAs: 'menu',
                bindToController: true,
            };

            return ddo;
        }

        function MenuItemsDirectiveController() {
            var menu = this;

            menu.isEmpty = function() {
                return menu.items.length === 0;
            }
        }



        NarrowItDownController.inject = ['MenuSearchService'];

        function NarrowItDownController(MenuSearchService) {

            var narrow = this;

            var searchService = MenuSearchService;
            // narrow.search = "";

            narrow.found = function() {
                var search = searchService.getMatchedMenuItems(narrow.search);

                search.then(function(response) {
                        // console.log("Items searched:  ",response.data.menu_items[2].name);
                        console.log("search: ", response);
                        narrow.list = response;
                    })
                    .catch(function() {
                        console.log("Not Found");
                    });

            }

            narrow.remove = function(index) {
                console.log("Removing");

                searchService.removeItem(index);
            }


        }

        MenuSearchService.inject = ['$http', 'ApiBaseUrl'];

        function MenuSearchService($http, ApiBaseUrl) {
            var service = this;
            var foundItems = [];

            service.getMatchedMenuItems = function(searchTerm) {
                return $http({
                        method: "GET",
                        url: ApiBaseUrl,
                    })
                    .then(function(response) {
                        // process result and only keep items that match
                        foundItems = [];
                        var found = response.data.menu_items;

                        for (var i = 0; i < found.length; i++) {

                            if (found[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
                                foundItems.push(found[i]);
                            }
                        }
                        // return processed items
                        return foundItems;
                    });
            }

            service.removeItem = function(index) {
                foundItems.splice(index, 1);
            }

            service.getSearchList = function() {
                return foundItems;
            }
        }



    }
)();
