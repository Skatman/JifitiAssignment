(function () {
'use strict';

angular.module('Data')
.service('AppDataService', AppDataService);

AppDataService.$inject = ['$http', 'ApiBasePath'];
function AppDataService($http, ApiBasePath) {
  var service = this;
  service.getAppData = function(){
    return $http({ url: (ApiBasePath + "/products.json") })
          .then(function (result) {
              return result;
          });
  };
}

})();
