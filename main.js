
(function(){

  var app = angular
    .module("myApp", [
      'ngTableModule'
    ]);

  app.controller('NameCtrl', NameCtrl);
  app.controller('ProductsCtrl', ProductsCtrl);

  function NameCtrl($scope) {
    $scope.name = 'name ctrl';
    $scope.names = [{
      id: 1,
      name: 'awais'
    }, {
      id: 2,
      name: 'shezi'
    }, {
      id: 3,
      name: 'adeel'
    }];
  }

  function ProductsCtrl($scope) {
    $scope.name = 'product ctrl';
    $scope.products = [{
      id: 1,
      name: 'products1'
    }, {
      id: 2,
      name: 'products2'
    }, {
      id: 3,
      name: 'products3'
    }];
  }

})();
