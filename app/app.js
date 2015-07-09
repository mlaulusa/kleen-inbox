angular.module('kleen', ['ngRoute', 'kleen.inbox'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partial/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}])
.controller('MainCtrl', ['$scope', function($scope){
	$scope.name = "Matthew";
	console.log($scope.name);
}]);
