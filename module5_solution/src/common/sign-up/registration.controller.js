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
              RegistrationService.signUp(firstName, lastName,
              email, phone, dish)
              .then( function (response) {
                  RegistrationService.insertData(response.data);
                  $ctrl.success = response;

              }).catch( function (error) {
                  console.log("Error: ", error);
                  $ctrl.errorMsg = error;
              });

    };

  }

}
)();
