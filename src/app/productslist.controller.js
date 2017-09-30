(function () {
'use strict';

angular.module('ProductsApp')
.controller('ProductsListController', ProductsListController);


ProductsListController.$inject = ['AppDataService', 'data'];
function ProductsListController(AppDataService, data) {
  console.log(data);
  var productsList = this;
  productsList.products = [];
  productsList.filteredProducts = [];
  data.data.Stores.forEach(function(store){
    store.Products.forEach(function(product){
      var productWithStoreName = product;
      productWithStoreName.ProductStore = store.StoreName;
      productsList.products.push(productWithStoreName);
      productsList.filteredProducts.push(productWithStoreName);
    })
  })

  productsList.filters = {
    filters: [
      {
        filterValues: data.data.GenderFilter,
        filterSelected: {},
      },
      {
        filterValues: data.data.PriceFilter,
        filterSelected: {},
      }
    ],

    filterFunc: function(){
      console.log(productsList.filters);
      var filterTags = [];
      this.filters.forEach(function(item){
        if (item.filterSelected.TagId !== undefined){
          filterTags.push(item.filterSelected);
        }
      });

      productsList.filteredProducts = productsList.products.filter(function(product){
        var fitsFilter = true;
        filterTags.forEach(function(filterTag){
          if (!product.ProductTags.includes(filterTag.Value)){
            fitsFilter = false;
          }
        })
        return fitsFilter;
      });
    }
  }
}

})();
