(
  function () {
    'use strict';

    angular.module('Data')
    .component('menuDetail',{
      templateUrl: 'src/menuapp/templates/detail.template.html',
      bindings:{
          list: '<'
      }
    })

  }
)();
