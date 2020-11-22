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
                        if (narrow.list.length == 0) {
                            console.log("Empty!");
                        }
                    })
                    .catch(function(error) {
                        narrow.errorMsg = "Not Found";

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
                            if (searchTerm === undefined) {
                                console.log("EMPTY");
                            } else if (found[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
                                foundItems.push(found[i]);
                            }

                        }
                        // return processed items
                        return foundItems;
                    });
            }

            service.removeItem = function(index) {
                foundItems.splice(index, 1);
                if (foundItems.length == 0) {
                    console.log("Empty value");
                }
            }

            service.getSearchList = function() {
                return foundItems;
            }
        }



    }
)();
