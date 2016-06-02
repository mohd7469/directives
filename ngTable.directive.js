
(function(){

  angular
    .module('ngTableModule', [])
    .directive('ngTable1', ngTable1)
    .directive('ngTable2', ngTable2);

  ngTable1.$inject = [];
  ngTable2.$inject = [];

  //*** about scope ***
//false(by default) - uses full ctrl scope any change to ctrl or directive will be reflect both side

//true - use ctrl scope but when you change inside directive
      // it'll create a new and separate scope for this directive
      // & not use ctrl scope and nor reflect back

//object(isolated-scope) - creates a separate scope but takes
                      // some info from controller's scope via attributes

//restrict: 'ECMA', //it can also work together

  function ngTable1() {

    return {
      restrict: 'A',
      templateUrl: './ngTable.directive.view.html',
//      scope: false,
//      scope: true,
      scope: {
        records: '='
      },
      link: link
    };

    function link(scope, element, attrs) {
      console.log('---------------directive 1');
      console.log(scope.names);
      console.log('records : ' + scope.records);

    }
  }

  function ngTable2() {

    return {
      restrict: 'A',
      templateUrl: './ngTable.directive.view.html',
//      scope: false,
      scope: true,
//      scope: {
//        records: '='
//      },
      link: link
    };

    function link(scope, element, attrs) {
      console.log('---------------directive 2');
//      console.log(scope.name = 'PRODUCT');
      console.log(scope.name = 'aasd');
      console.log(scope.name);
      console.log(scope.products);
      console.log('records : ' + scope.records);

    }
  }

})();
