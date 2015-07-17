angular.module('kleen.contacts', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('#/contacts', {
    templateUrl: '/partial/contacts/contacts.html',
    controller: 'ContactsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}])
.controller('ContactsCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('').success(function(res){
    $scope.contacts = res.data;
  });
}]);
