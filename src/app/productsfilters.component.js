(function () {
'use strict';

angular.module('ProductsApp')
.component('productsFilters', {
  templateUrl: 'src/app/templates/productsfilters.template.html',
  bindings: {
    filters: '<'
  }
});

})();
