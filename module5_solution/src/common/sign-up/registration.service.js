(function () {
  'use strict';

  angular.module('common')
  .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['ApiPath','$http']
  function RegistrationService(ApiPath, $http) {

    var service = this;

    var data = {};
    var newDat = {};
    var f = "";
    service.signUp = function (firstName, lastName,
                               email, phone, dish) {

       if (phone === undefined) {
         phone = null;
       }

       var link = $http.get(ApiPath + "menu_items/" + dish.toUpperCase() + ".json");

       // console.log("link: ",link.response);

       data = {
         'FirstName': firstName,
         'LastName': lastName,
         'email': email,
         'phone': phone,
         'dish': dish

       }

       // https://stackoverflow.com/questions/35235245/undefined-when-returning-http-promise-in-controller-from-factory
       return link;
    }

    service.insertData = function (dat) {
       newDat = dat;
       console.log("Inserting :",newDat);
       // return newDat;

    }

    service.returnLink = function () {
      return newDat;
    }

    service.returnData = function () {
      return data ;
    }


  }

})();
