(function () {
  'use strict';

  angular.module('common')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['infoDetail', 'link']
  function InfoController(infoDetail, link) {
    var $ctrl = this;

    $ctrl.info = infoDetail;
    $ctrl.link = link;
    
  }

})();
