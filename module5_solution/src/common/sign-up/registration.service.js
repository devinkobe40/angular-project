(function () {
  'use strict';

  angular.module('common')
  .service('RegistrationService', RegistrationService);

  RegistrationService.$inject = ['ApiPath','$http']
  function RegistrationService(ApiPath, $http) {

    var service = this;

    var data = {};
    var newDat = {};
    service.dishLookup = function (dish) {

       var link = $http.get(ApiPath + "menu_items/" + dish.toUpperCase() + ".json");

       // https://stackoverflow.com/questions/35235245/undefined-when-returning-http-promise-in-controller-from-factory
       return link;
  }

  service.signUp = function (firstName, lastName,
                             email, phone, dish) {

        if (phone === undefined) {
          phone = null;
        }

          data = {
            'FirstName': firstName,
            'LastName': lastName,
            'email': email,
            'phone': phone,
            'dish': dish
          }
    
  }

    // API link
    service.insertData = function (dat) {
       newDat = dat;
       console.log("Inserting :",newDat);
       return newDat;
    }

    // service.validation = function (bool) {
    //   valid = bool;
    //
    //   console.log("is Valid? ", valid);
    // }
    //
    // service.isValid = function () {
    //   console.log("is it valid?", valid);
    //   return valid;
    // }

    service.returnLink = function () {
      return newDat;
    }

    service.returnData = function () {
      return data ;
    }


  }

})();
