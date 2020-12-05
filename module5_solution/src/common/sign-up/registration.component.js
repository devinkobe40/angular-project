(function () {
  'use strict';

  angular.module('common')
  .component('signUp',{
    templateUrl: 'src/common/sign-up/registration.template.html',
    controller: 'RegistrationController',
    controllerAs: 'reg'
  })

  }
)();
