(function () {
'use strict';

angular.module('ProductsApp')
.component('productsList', {
  templateUrl: 'src/app/templates/products.template.html',
  bindings: {
    products: '<'
  }
});

})();
