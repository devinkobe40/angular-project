(function () {
  'use strict';

  angular.module('common')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['infoDetail', 'link']
  function InfoController(infoDetail, link) {
    var $ctrl = this;

    $ctrl.info = infoDetail;
    console.log("dishes",link);
    $ctrl.link = link;

  }

})();
