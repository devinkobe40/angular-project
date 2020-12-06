(function () {
  'use strict';

  angular.module('common')
  .controller('RegistrationController', RegistrationController);


  RegistrationController.$inject = ['RegistrationService'];
  function RegistrationController(RegistrationService) {

    var $ctrl = this;
    $ctrl.errorMsg = "";
    $ctrl.success = "";

    $ctrl.submit = function(firstName, lastName, email, phone, dish) {
      $ctrl.completed = true;
              RegistrationService.dishLookup(dish)
              .then( function (response) {
                  // RegistrationService.validation(true);
                  RegistrationService.signUp(firstName, lastName, email, phone, dish);
                  RegistrationService.insertData(response.data);
                  $ctrl.success = response;
                  $ctrl.errorMsg = "";

              }).catch( function (error) {
                  console.log("Error: ", error);
                  // RegistrationService.validation(false);
                  $ctrl.errorMsg = error;
                  $ctrl.success = "";

              });

    };

  }

}
)();
