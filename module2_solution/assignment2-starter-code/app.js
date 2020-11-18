( function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOff', ShoppingListService);


  ToBuyController.inject = ['ShoppingListCheckOff'];
  function ToBuyController(ShoppingListCheckOff){
    var toBuy = this;

    toBuy.list = ShoppingListCheckOff.getStock();
      // console.log(itemIndex);
    // toBuy.notifMsg = e.message;

    toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOff.addItem(itemIndex);
    };


  }

  AlreadyBoughtController.inject = ['ShoppingListCheckOff'];
  function AlreadyBoughtController(ShoppingListCheckOff){
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOff.getAlreadyBought();
  }

  function ShoppingListService(){
    var service = this;

    var toBuy = [
      {
        name: "Cookies",
        quantity: "4"
      },
      {
        name: "Tomato",
        quantity: "10"
      },
      {
        name: "Viagra",
        quantity: "2"
      },
      {
        name: "Coconut Oil",
        quantity: "4 "
      },
      {
        name: "Pizza",
        quantity: "99"
      },

    ];
    var alreadyBought = [];

    service.addItem = function (itemIndex) {

          alreadyBought.push(toBuy[itemIndex]);
          // console.log(itemIndex);
          toBuy.splice(itemIndex, 1);
          // console.log("updated stock: ", toBuy.length);

          };

    service.getStock = function () {
      return toBuy;
    };

    service.getAlreadyBought = function () {
      return alreadyBought;
    };


  }


}

)();
