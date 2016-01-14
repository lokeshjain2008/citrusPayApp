(function() {
  'use strict';

  angular
    .module('cirtusPay')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
