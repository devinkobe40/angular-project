(function () {
  'use strict';

  angular.module('common')
  .component('infoDetail',{
    templateUrl: 'src/common/my-info/info.detail.template.html',
    bindings: {
      detail: '<',
      link: '<'
    },
    controller: FavoriteDishImageController
  });

  FavoriteDishImageController.$inject = ['ApiPath']
  function FavoriteDishImageController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;

  }

}

)();
