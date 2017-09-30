(function () {
'use strict';

angular.module('ProductsApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/app/templates/main-products.template.html',
    controller: 'ProductsListController as productsList',
    resolve: {
      data: ['AppDataService', function (AppDataService) {
        return AppDataService.getAppData();
      }]
    }
  })

}

})();
