angular.module('kleen.inbox', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/inbox', {
		templateUrl: "partial/inbox/inbox.html",
		controller: "InboxCtrl"
	})
	.otherwise({
		redirectTo: '/'
	});
}])
.controller('InboxCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/partial/inbox/work-orders.json').then(function(res){
		$scope.tickets = res.data;
		console.log(res.data);
	});
}]);
