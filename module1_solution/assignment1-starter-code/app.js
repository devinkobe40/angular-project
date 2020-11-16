( function(){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu = "";
    $scope.name;

    $scope.submitMenu = function () {
      var splice = $scope.lunchMenu.split(',');
      $scope.name = splice;
      // console.log($scope.name.length);
      // console.log($scope.name);
      //Checks if the menu given is empty
      var filtered = $scope.name.filter(function (el) {
          return el != "";
      });
      $scope.name = filtered;

      // Checks the number of items in the menu
      var output = submitMenu($scope.name.length);
    }



    function submitMenu(string){

      if (string == 0) {
        $scope.name = "Please Enter Data First!";
      }
      else if (string <= 3 && string >0) {
        $scope.name = "Enjoy";
      }
      else {
        $scope.name = "Too much!";
      }
    }



  }



}


)();
